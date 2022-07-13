import { getContentType } from '../../api/api.helpers'
import { axiosClassic } from '../../api/interseptors'
import Cookies from 'js-cookie'

import {
	removeTokenStorage,
	saveToLocalStorage,
} from '@/services/auth/auth.helper'

import { getAuthUrl } from '@/config/api.config'

import { IAuthResponse } from '@/store/user/user.interface'

export const AuthService = {
	async register(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('/register'),
			{ email, password }
		)
		if (response.data.accessToken) {
			saveToLocalStorage(response.data)
		}

		return response
	},

	async login(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('/login'),
			{ email, password }
		)
		if (response.data.accessToken) {
			saveToLocalStorage(response.data)
		}

		return response
	},

	logout() {
		removeTokenStorage()
		localStorage.removeItem('user')
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('/login/access-token'),
			{ refreshToken },
			{ headers: getContentType() }
		)

		if (response.data.accessToken) {
			saveToLocalStorage(response.data)
		}

		return response
	},
}
