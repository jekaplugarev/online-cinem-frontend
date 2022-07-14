import { FC } from 'react'

import Statistics from '@/screens/admin/home/Statistics/Statistics'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const Admin: FC = () => {
	return (
		<Meta title="Панель администратора">
			<AdminNavigation />
			<Heading title="Статистика" />
			<Statistics />
		</Meta>
	)
}

export default Admin
