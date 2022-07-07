import { FC } from 'react'

import { IHome } from '@/screens/home/home.interface'

import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Фильмы онлайн"
			description="Смотреть фильмы в онлайн кинотеатре"
		>
			<Heading
				title="Смотри фильмы онлайн"
				className="text-gray-300 mb-8 text-xl"
			/>
		</Meta>
	)
}

export default Home
