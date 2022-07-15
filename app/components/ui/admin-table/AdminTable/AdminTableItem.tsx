import { FC } from 'react'

import AdminActions from '@/ui/admin-table/AdminTable/AdminActions/AdminActions'
import { IAdminTableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'

import styles from './AdminTable.module.scss'

const AdminTableItem: FC<IAdminTableItem> = ({ removeHandler, tableItem }) => {
	return (
		<div className={styles.item}>
			{tableItem.items.map((value) => (
				<div key={value}>{value}</div>
			))}
			<AdminActions editUrl={tableItem.editUrl} removeHandler={removeHandler} />
		</div>
	)
}

export default AdminTableItem
