import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IGenreEditInput } from '@/screens/admin/genres/genre-edit.interface'

import { GenreService } from '@/services/genre.service'

import { getKeys } from '@/utils/object/getKeys'
import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/config/url.config'

export const useGenreEdit = (setValue: UseFormSetValue<IGenreEditInput>) => {
	const { push, query } = useRouter()
	const genreId = String(query.id)
	const { isLoading } = useQuery(
		['genre', genreId],
		() => GenreService.getById(genreId),
		{
			onError: (error) => {
				toastError(error, 'Получение жанра')
			},
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => setValue(key, data[key]))
			},
			enabled: !!query.id,
		}
	)
	const { mutateAsync } = useMutation(
		'update genre',
		(data: IGenreEditInput) => GenreService.update(genreId, data),
		{
			onError: (error) => {
				toastError(error, 'Обновление жанра')
			},
			onSuccess: () => {
				toastr.success('Обновление жанра', 'Обновление жанра прошло успешно')
				push(getAdminUrl('genres'))
			},
		}
	)
	const onSubmit: SubmitHandler<IGenreEditInput> = async (data) =>
		await mutateAsync(data)

	return { isLoading, onSubmit }
}
