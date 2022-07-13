import { errorCatch } from '../../api/api.helpers'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import { AuthService } from '@/services/auth/auth.service'

import { toastError } from '@/utils/toast-error'

import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Регистрация', 'Регистрация завершена успешно')

			return response.data
		} catch (e) {
			toastError(e)
			return thunkApi.rejectWithValue(e)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Логин', 'Логинизация завершена успешно')

			return response.data
		} catch (e) {
			toastError(e)
			return thunkApi.rejectWithValue(e)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout()
})

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()

			return response.data
		} catch (e) {
			if (errorCatch(e) === 'jwt expired') {
				toastError(
					'Выход',
					' Ваша авторизация закончилась, пожалуйста войдите снова'
				)
				thunkApi.dispatch(logout())
			}
			return thunkApi.rejectWithValue(e)
		}
	}
)
