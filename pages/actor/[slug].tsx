import Error404 from '../404'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import CatalogMovies from '@/ui/catalog-movies/CatalogMovies'

import { IActor, IMovie } from '@/shared/types/movie.types'

import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

interface IActorPage {
	movies: IMovie[]
	actor: IActor | undefined
}

const ActorPage: NextPage<IActorPage> = ({ movies, actor }) => {
	return actor ? (
		<CatalogMovies title={actor.name} movies={movies || []} />
	) : (
		<Error404 />
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: actors } = await ActorService.getAll()
		const paths = actors.map((actor) => ({ params: { slug: actor.slug } }))

		return { paths, fallback: 'blocking' }
	} catch (e) {
		return { paths: [], fallback: false }
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: actor } = await ActorService.getBySlug(String(params?.slug))
		const { data: movies } = await MovieService.getByActor(actor._id)

		return {
			props: {
				movies,
				actor,
			},
		}
	} catch (e) {
		return {
			notFound: true,
		}
	}
}

export default ActorPage
