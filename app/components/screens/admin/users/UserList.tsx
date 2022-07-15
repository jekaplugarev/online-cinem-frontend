import { FC } from 'react'

import { useUsers } from '@/screens/admin/users/useUsers'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const UserList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useUsers()

	return (
		<Meta title="Пользователи">
			<AdminNavigation />
			<Heading title="Пользователи" />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				tableItems={data || []}
				removeHandler={deleteAsync}
				headerItems={['Email', 'Дата регистрации']}
			/>
		</Meta>
	)
}

export default UserList
