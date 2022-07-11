import { FC } from 'react'

import FavoriteMovies from '@/components/layout/Sidebar/MoviesContainer/FavoriteMovies/FavoriteMovies'
import PopularMovies from '@/components/layout/Sidebar/MoviesContainer/PopularMovies'

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<FavoriteMovies />
		</div>
	)
}

export default MoviesContainer
