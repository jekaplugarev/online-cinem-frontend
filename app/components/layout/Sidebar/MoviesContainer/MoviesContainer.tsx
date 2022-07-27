import dynamic from 'next/dynamic'
import { FC } from 'react'

import PopularMovies from '@/components/layout/Sidebar/MoviesContainer/PopularMovies'

const DynamicFavoritesMovies = dynamic(
	() => import('./FavoriteMovies/FavoriteMovies'),
	{
		ssr: false,
	}
)

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<DynamicFavoritesMovies />
		</div>
	)
}

export default MoviesContainer
