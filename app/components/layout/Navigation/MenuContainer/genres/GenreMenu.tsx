import { FC } from 'react'

import Menu from '@/components/layout/Navigation/MenuContainer/Menu'
import { usePopularGenre } from '@/components/layout/Navigation/MenuContainer/genres/usePopularGenre'

const GenreMenu: FC = () => {
	const { isLoading, data } = usePopularGenre()

	return isLoading ? (
		<div className="mx-11 mb-6">Загрузка...</div>
	) : (
		<Menu menu={{ title: 'Популярные жанры', items: data || [] }} />
	)
}

export default GenreMenu
