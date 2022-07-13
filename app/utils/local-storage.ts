export const getLocalStorageItem = (name: string) => {
	if (typeof localStorage !== 'undefined') {
		const localStorageItem = localStorage.getItem(name)
		return localStorageItem ? JSON.parse(localStorageItem) : null
	}

	return null
}
