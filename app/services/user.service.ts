import axios from 'api/interseptors'

import { IProfileInput } from '@/screens/profile/profile.interface'

import { IUser } from '@/shared/types/user.types'

import { getUsersUrl } from '@/config/api.config'

export const UserService = {
	async getAll(searchTerm?: string) {
		return axios.get<IUser[]>(getUsersUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},

	async getProfile() {
		return axios.get<IUser>(getUsersUrl('/profile'))
	},

	async getById(_id: string) {
		return axios.get<IUser>(getUsersUrl(`/${_id}`))
	},

	async updateProfile(data: IProfileInput) {
		return axios.put<string>(getUsersUrl('/profile'), data)
	},

	async update(_id: string, data: IProfileInput) {
		return axios.put<string>(getUsersUrl(`/${_id}`), data)
	},

	async deleteUser(_id: string) {
		return axios.delete<string>(getUsersUrl(`/${_id}`))
	},
}
