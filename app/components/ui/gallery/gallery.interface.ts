export interface IGalleryItem {
	posterPath: string
	link: string
	name: string
	content?: {
		title: string
		subTitle?: string
	}
}

export interface IGalleryItemProps {
	item: IGalleryItem
	variant: 'vertical' | 'horizontal'
}
