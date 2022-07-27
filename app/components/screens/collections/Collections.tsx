import { FC } from 'react'

import CollectionItem from '@/screens/collections/CollectionItem'
import { ICollection } from '@/screens/collections/collections.interface'

import Description from '@/ui/heading/Description'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import styles from './Collections.module.scss'

const Collections: FC<{ collections: ICollection[] }> = ({ collections }) => {
	return (
		<Meta title="Жанры">
			<Heading title="Жанры" className={styles.heading} />
			<Description
				text="Выбери жанр который хочешь посмотреть"
				className={styles.description}
			/>
			<section className={styles.collections}>
				{collections?.map((c) => (
					<CollectionItem key={c._id} collection={c} />
				))}
			</section>
		</Meta>
	)
}

export default Collections
