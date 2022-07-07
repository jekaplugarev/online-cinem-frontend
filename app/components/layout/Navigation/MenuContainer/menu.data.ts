import { IMenu } from './menu.interface'

export const firstMenu: IMenu = {
	title: 'Меню',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Домой',
		},
		{
			icon: 'MdExplore',
			link: '/genres',
			title: 'Жанры',
		},
		{
			icon: 'MdRefresh',
			link: '/fresh',
			title: 'Новинки',
		},
		{
			icon: 'MdLocalFireDepartment',
			link: '/trending',
			title: 'В тренде',
		},
	],
}

export const userMenu: IMenu = {
	title: 'Администратор',
	items: [],
}
