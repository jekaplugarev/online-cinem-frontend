import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IUserEditInput } from '@/screens/admin/users/user-edit.interface'

import { UserService } from '@/services/user.service'

import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/config/url.config'

export const useUserEdit = (setValue: UseFormSetValue<IUserEditInput>) => {
	const { push, query } = useRouter()
	const userId = String(query.id)
	const { isLoading } = useQuery(
		['user', userId],
		() => UserService.getById(userId),
		{
			onError: (error) => {
				toastError(error, 'Получение пользователя')
			},
			onSuccess: ({ data }) => {
				setValue('email', data.email)
				setValue('isAdmin', data.isAdmin)
			},
			enabled: !!query.id,
		}
	)
	const { mutateAsync } = useMutation(
		'update genre',
		(data: IUserEditInput) => UserService.update(userId, data),
		{
			onError: (error) => {
				toastError(error, 'Обновление пользователя')
			},
			onSuccess: () => {
				toastr.success(
					'Обновление пользователя',
					'Обновление пользователя прошло успешно'
				)
				push(getAdminUrl('users'))
			},
		}
	)
	const onSubmit: SubmitHandler<IUserEditInput> = async (data) =>
		await mutateAsync(data)

	return { isLoading, onSubmit }
}
