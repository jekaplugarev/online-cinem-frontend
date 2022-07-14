import { FC } from 'react'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'
import { useUsers } from '@/screens/admin/users/useUsers'

const UserList: FC = () => {
	const { users } = useUsers()

	return (
		<Meta title='Пользователи'>
			<AdminNavigation />
			<Heading title='Пользователи' />
			<AdminHeader handleSearch={} searchTerm={} />
		</Meta>
	)
}

export default UserList
