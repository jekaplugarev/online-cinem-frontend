import { FC } from 'react'

import styles from '@/ui/gallery/Gallery.module.scss'
import GalleryItem from '@/ui/gallery/GalleryItem'
import { IGalleryItem } from '@/ui/gallery/gallery.interface'

const Gallery: FC<{ items: IGalleryItem[] }> = ({ items }) => {
	return (
		<div className={styles.gallery}>
			{items.map((item) => (
				<GalleryItem item={item} variant="vertical" key={item.link} />
			))}
		</div>
	)
}

export default Gallery
