import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import Field from '@/ui/form-elements/Field'

import { validEmail } from '@/shared/regex'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email обязателен',
					pattern: {
						value: validEmail,
						message: 'Пожалуйста введите валидный email',
					},
				})}
				placeholder="Email"
				// @ts-ignore
				error={errors.email}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Пароль обязателен',
								minLength: {
									value: 6,
									message: 'Пожалуйста введите пароль более 6 символов',
								},
						  }
						: {}
				)}
				placeholder="Пароль"
				type="password"
				// @ts-ignore
				error={errors.password}
			/>
		</>
	)
}

export default AuthFields
