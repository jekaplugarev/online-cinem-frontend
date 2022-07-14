import { FC } from 'react'

import CountUsers from '@/screens/admin/home/Statistics/CountUsers'
import PopularMovie from '@/screens/admin/home/Statistics/PopularMovie'

import styles from '../Admin.module.scss'

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<CountUsers />
			<PopularMovie />
		</div>
	)
}

export default Statistics
