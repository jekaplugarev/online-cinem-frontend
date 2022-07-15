export const getGenresListEach = (
	index: number,
	length: number,
	name: string
) => {
	return index + 1 === length ? name : name + ', '
}

interface IArrayItem {
	name: string
}

export const getGenresList = (array: IArrayItem[]) =>
	array.map((i) => i.name).join(', ')
