import { INavItem } from '@/ui/admin-navigation/admin-navigation.interface'

import { getAdminHomeUrl, getAdminUrl } from '@/config/url.config'

export const navItems: INavItem[] = [
	{
		title: 'Статистика',
		link: getAdminHomeUrl(),
	},
	{
		title: 'Пользователи',
		link: getAdminUrl('users'),
	},
	{
		title: 'Фильмы',
		link: getAdminUrl('movies'),
	},
	{
		title: 'Актеры',
		link: getAdminUrl('actors'),
	},
	{
		title: 'Жанры',
		link: getAdminUrl('genres'),
	},
]
