import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IProfileInput } from '@/screens/profile/profile.interface'

import { UserService } from '@/services/user.service'

import { toastError } from '@/utils/toast-error'

export const useProfile = (setValue: UseFormSetValue<IProfileInput>) => {
	const { isLoading } = useQuery('profile', () => UserService.getProfile(), {
		onError: (error) => {
			toastError(error, 'Получение профиля')
		},
		onSuccess: ({ data }) => {
			setValue('email', data.email)
		},
	})
	const { mutateAsync } = useMutation(
		'update profile',
		(data: IProfileInput) => UserService.updateProfile(data),
		{
			onError: (error) => {
				toastError(error, 'Обновление профиля')
			},
			onSuccess: () => {
				toastr.success(
					'Обновление профиля',
					'Обновление профиля прошло успешно'
				)
			},
		}
	)
	const onSubmit: SubmitHandler<IProfileInput> = async (data) =>
		await mutateAsync(data)

	return { isLoading, onSubmit }
}
