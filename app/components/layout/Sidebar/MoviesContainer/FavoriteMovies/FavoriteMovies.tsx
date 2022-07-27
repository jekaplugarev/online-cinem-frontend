import { FC } from 'react'

import NotAuthFavorites from '@/components/layout/Sidebar/MoviesContainer/FavoriteMovies/NotAuthFavorites'
import MovieList from '@/components/layout/Sidebar/MoviesContainer/MovieList'

import { useFavorites } from '@/screens/favorites/useFavorites'

import SkeletonLoader from '@/ui/SkeletonLoader'

import { useAuth } from '@/hooks/useAuth'

const FavoriteMovies: FC = () => {
	const { favoriteMovies, isLoading } = useFavorites()
	const { user } = useAuth()

	if (!user) {
		return <NotAuthFavorites />
	}

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			title="Избранное"
			link="/favorites"
			movies={favoriteMovies?.slice(0, 3) || []}
		/>
	)
}

export default FavoriteMovies
