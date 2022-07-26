import { IMoviePage } from '../../../../pages/movie/[slug]'
import dynamic from 'next/dynamic'
import { FC } from 'react'

import Content from '@/screens/single-movie/Content/Content'
import { useUpdateCountOpened } from '@/screens/single-movie/useUpdateCountOpened'

import Banner from '@/ui/banner/Banner'
import Gallery from '@/ui/gallery/Gallery'
import SubHeading from '@/ui/heading/SubHeading'

import Meta from '@/utils/meta/Meta'

const DynamicPlayer = dynamic(() => import('@/ui/video-player/VideoPlayer'), {
	ssr: false,
})

const DynamicRating = dynamic(() => import('./RateMovie/RateMovie'), {
	ssr: false,
})

const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => {
	useUpdateCountOpened(movie.slug)

	return (
		<Meta title={movie.title} description={`Смотреть ${movie?.title}`}>
			<Banner
				image={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>

			<DynamicPlayer videoSource={movie.videoUrl} slug={movie.slug} />

			<div className="mt-12">
				<SubHeading title="Похожие фильмы" />
				<Gallery items={similarMovies} />
			</div>

			<DynamicRating id={movie._id} slug={movie.slug} />
		</Meta>
	)
}

export default SingleMovie
