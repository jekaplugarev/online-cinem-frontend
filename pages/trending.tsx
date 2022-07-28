import { GetStaticProps, NextPage } from 'next'

import CatalogMovies from '@/ui/catalog-movies/CatalogMovies'

import { IMovie } from '@/shared/types/movie.types'

import { MovieService } from '@/services/movie.service'

const TrendingPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<CatalogMovies
			title="В тренде"
			movies={movies || []}
			description="Популярные фильмы и сериалы в лучшем качестве"
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const movies = await MovieService.getMostPopularMovies()

		return {
			props: {
				movies,
			},
			revalidate: 60,
		}
	} catch (e) {
		return {
			notFound: true,
		}
	}
}

export default TrendingPage
