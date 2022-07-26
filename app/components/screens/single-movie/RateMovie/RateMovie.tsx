import { FC } from 'react'
import StarRating from 'react-star-rating-component'

import { useRateMovie } from '@/screens/single-movie/RateMovie/useRateMovie'

import AuthButton from '@/ui/video-player/AuthPlaceholder/AuthButton'

import { useAuth } from '@/hooks/useAuth'

import styles from './RateMovie.module.scss'

interface IRateMovie {
	id: string
	slug: string
}

const RateMovie: FC<IRateMovie> = ({ id, slug }) => {
	const { user } = useAuth()
	const { handleClick, isSended, rating } = useRateMovie(id)

	return (
		<div className={styles.wrapper}>
			<h3>Насколько тебе понравился фильм?</h3>
			<p>Рейтинг</p>

			{user ? (
				<>
					{isSended ? (
						<div className={styles.thanks}>Спасибо за рейтинг</div>
					) : (
						<StarRating
							name="star-rating"
							value={rating}
							onStarClick={handleClick}
							emptyStarColor="#4f4f4f"
						/>
					)}
				</>
			) : (
				<AuthButton slug={slug} />
			)}
		</div>
	)
}

export default RateMovie
