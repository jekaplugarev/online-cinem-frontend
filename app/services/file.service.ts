import axios from 'api/interseptors'

export const FileService = {
	async upload(file: FormData, folder?: string | undefined) {
		return axios.post<{ url: string; name: string }[]>(`/files`, file, {
			params: { folder },
			headers: { 'Content-Type': 'multipart/form-data' },
		})
	},
}
