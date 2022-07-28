import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'

import { useAuth } from '@/hooks/useAuth'

import { RatingService } from '@/services/rating.service'

import { toastError } from '@/utils/toast-error'

export const useRateMovie = (movieId: string) => {
	const { user } = useAuth()

	const [rating, setRating] = useState(0)
	const [isSended, setIsSended] = useState(false)

	const { refetch } = useQuery(
		['movie rating', movieId],
		() => RatingService.getByUserMovie(movieId),
		{
			onError: (error) => {
				toastError(error, 'Рейтинг')
			},
			onSuccess: ({ data }) => {
				setRating(data)
			},
			enabled: !!movieId && !!user,
		}
	)
	const { mutateAsync } = useMutation(
		'set rating',
		({ value }: { value: number }) => RatingService.setRating(movieId, value),
		{
			onError: (error) => {
				toastError(error, 'Рейтинг фильма')
			},
			onSuccess: () => {
				setIsSended(true)
				refetch()

				setTimeout(() => {
					setIsSended(false)
				}, 2400)
			},
		}
	)
	const handleClick = async (nextValue: number) => {
		setRating(nextValue)
		await mutateAsync({ value: nextValue })
	}

	return { isSended, rating, handleClick }
}
