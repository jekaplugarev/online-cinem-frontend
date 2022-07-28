import { FC } from 'react'
import { useQuery } from 'react-query'

import MovieList from '@/components/layout/Sidebar/MoviesContainer/MovieList'

import SkeletonLoader from '@/ui/SkeletonLoader'

import { MovieService } from '@/services/movie.service'

const PopularMovies: FC = () => {
	const { isLoading, data: movies } = useQuery(
		'Popular movies in sidebar',
		() => MovieService.getMostPopularMovies(),
		{
			select: (data) => data.slice(0, 3),
		}
	)
	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			link="/trending"
			movies={movies || []}
			title="Популярные фильмы"
		/>
	)
}

export default PopularMovies
