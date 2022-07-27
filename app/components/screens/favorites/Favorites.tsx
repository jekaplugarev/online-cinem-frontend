import { FC } from 'react'

import FavoriteItem from '@/screens/favorites/FavoriteItem'
import { useFavorites } from '@/screens/favorites/useFavorites'

import SkeletonLoader from '@/ui/SkeletonLoader'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import styles from './Favorites.module.scss'

const Favorites: FC = () => {
	const { favoriteMovies, isLoading } = useFavorites()

	return (
		<Meta title="Избранное">
			<Heading title="Избранное" />
			<section className={styles.favorites}>
				{isLoading ? (
					<SkeletonLoader
						className={styles.skeletonLoader}
						count={3}
						containerClassName={styles.containerLoader}
					/>
				) : (
					favoriteMovies?.map((movie) => (
						<FavoriteItem movie={movie} key={movie._id} />
					))
				)}
			</section>
		</Meta>
	)
}

export default Favorites
