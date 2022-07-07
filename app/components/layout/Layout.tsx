import { FC } from 'react'

import Navigation from '@/components/layout/Navigation/Navigation'
import Sidebar from '@/components/layout/Sidebar/Sidebar'

import styles from './Layout.module.scss'

const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<Sidebar />
		</div>
	)
}

export default Layout
