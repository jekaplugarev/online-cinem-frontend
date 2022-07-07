import { useQuery } from 'react-query'

import { IMenuItem } from '@/components/layout/Navigation/MenuContainer/menu.interface'

import { GenreService } from '@/services/genre.service'

import { getGenreUrl } from '@/config/url.config'

export const usePopularGenre = () => {
	return useQuery('popular genre menu', () => GenreService.getAll(), {
		select: ({ data }) =>
			data
				.map(
					(genre) =>
						({
							icon: genre.icon,
							link: getGenreUrl(genre.slug),
							title: genre.name,
						} as IMenuItem)
				)
				.splice(0, 4),
	})
}
