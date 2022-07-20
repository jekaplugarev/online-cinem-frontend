import { FC } from 'react'

import { IHome } from '@/screens/home/home.interface'

import Gallery from '@/ui/gallery/Gallery'
import Heading from '@/ui/heading/Heading'
import SubHeading from '@/ui/heading/SubHeading'
import Slider from '@/ui/slider/Slider'

import Meta from '@/utils/meta/Meta'

const Home: FC<IHome> = ({ slides, trendingMovies, actors }) => {
	return (
		<Meta
			title="Фильмы онлайн"
			description="Смотреть фильмы в онлайн кинотеатре"
		>
			<Heading
				title="Смотри фильмы онлайн"
				className="text-gray-300 mb-8 text-xl"
			/>

			{slides.length && <Slider slides={slides} />}

			<div className="my-10">
				<SubHeading title="Популярное сейчас" />
				{trendingMovies.length && <Gallery items={trendingMovies} />}
			</div>

			<div className="my-10">
				<SubHeading title="Актеры" />
				{actors.length && <Gallery items={actors} />}
			</div>
		</Meta>
	)
}

export default Home
