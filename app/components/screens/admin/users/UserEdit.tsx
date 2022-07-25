import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { useUserEdit } from '@/screens/admin/users/useUserEdit'
import { IUserEditInput } from '@/screens/admin/users/user-edit.interface'
import AuthFields from '@/screens/auth/AuthFields'

import SkeletonLoader from '@/ui/SkeletonLoader'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Button from '@/ui/form-elements/Button'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const UserEdit: FC = () => {
	const { handleSubmit, register, control, formState, setValue } =
		useForm<IUserEditInput>({ mode: 'onChange' })
	const { isLoading, onSubmit } = useUserEdit(setValue)

	return (
		<Meta title="Редактирование пользователя">
			<AdminNavigation />
			<Heading title="Редактирование пользователя" />

			<form onSubmit={handleSubmit(onSubmit)} className="admin-form">
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<AuthFields
							register={register}
							// @ts-ignore
							formState={formState}
						/>

						<Controller
							control={control}
							name="isAdmin"
							render={({ field }) => (
								<button
									onClick={(e) => {
										e.preventDefault()
										field.onChange(!field.value)
									}}
									className="text-link block mb-7"
								>
									{field.value
										? 'Сделать пользователем'
										: 'Сделать администратором'}
								</button>
							)}
						/>

						<Button>Обновить</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default UserEdit
