import { ChangeEvent, FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcon'

import styles from './SearchField.module.scss'

interface ISearchField {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearchField> = ({ searchTerm, handleSearch }) => {
	return (
		<div className={styles.search}>
			<MaterialIcon name="MdSearch" />
			<input placeholder="Поиск" value={searchTerm} onChange={handleSearch} />
		</div>
	)
}

export default SearchField
