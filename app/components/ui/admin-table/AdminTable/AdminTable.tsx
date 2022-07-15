import { FC } from 'react'

import SkeletonLoader from '@/ui/SkeletonLoader'
import AdminTableHeader from '@/ui/admin-table/AdminTable/AdminTableHeader'
import AdminTableItem from '@/ui/admin-table/AdminTable/AdminTableItem'
import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'

import styles from './AdminTable.module.scss'

interface IAdminTable {
	tableItems: ITableItem[]
	isLoading: boolean
	headerItems: string[]
	removeHandler: (id: string) => void
}

const AdminTable: FC<IAdminTable> = ({
	tableItems,
	isLoading,
	headerItems,
	removeHandler,
}) => {
	return (
		<div>
			<AdminTableHeader headerItems={headerItems} />

			{isLoading ? (
				<SkeletonLoader count={1} height={48} className="mt-4" />
			) : tableItems.length ? (
				tableItems.map((tableItem) => (
					<AdminTableItem
						tableItem={tableItem}
						removeHandler={() => removeHandler(tableItem._id)}
						key={tableItem._id}
					/>
				))
			) : (
				<div className={styles.notFound}>Элементов не найдено</div>
			)}
		</div>
	)
}

export default AdminTable
