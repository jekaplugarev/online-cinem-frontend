import Link from 'next/link'
import { FC } from 'react'

import MovieItem from '@/components/layout/Sidebar/MoviesContainer/MovieItem'
import { IMovieList } from '@/components/layout/Sidebar/MoviesContainer/movie-list.interface'

import styles from './MovieList.module.scss'

const MovieList: FC<IMovieList> = ({ title, link, movies }) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies.map((movie) => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link href={link}>
				<a className={styles.button}>Смотреть больше</a>
			</Link>
		</div>
	)
}

export default MovieList
