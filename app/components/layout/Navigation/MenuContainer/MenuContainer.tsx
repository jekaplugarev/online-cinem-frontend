import { FC } from 'react'

import Menu from '@/components/layout/Navigation/MenuContainer/Menu'
import GenreMenu from '@/components/layout/Navigation/MenuContainer/genres/GenreMenu'
import { firstMenu } from '@/components/layout/Navigation/MenuContainer/menu.data'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<GenreMenu />
			{/*<Menu menu={userMenu} />*/}
		</div>
	)
}

export default MenuContainer
