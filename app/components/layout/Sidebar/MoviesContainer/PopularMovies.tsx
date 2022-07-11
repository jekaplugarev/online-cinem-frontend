import { FC } from 'react'
import { useQuery } from 'react-query'

import MovieList from '@/components/layout/Sidebar/MoviesContainer/MovieList'

import SkeletonLoader from '@/ui/SkeletonLoader'

import { MovieService } from '@/services/movie.service'

const PopularMovies: FC = () => {
	const { isLoading, data: popularMovies } = useQuery(
		'Popular movies in sidebar',
		() => {
			MovieService.getMostPopularMovies()
		}
	)
	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			link="/trending"
			movies={popularMovies || []}
			title="Популярные фильмы"
		/>
	)
}

export default PopularMovies
