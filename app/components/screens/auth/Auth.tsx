import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import AuthFields from '@/screens/auth/AuthFields'
import { IAuthInput } from '@/screens/auth/auth.interface'
import { useAuthRedirect } from '@/screens/auth/useAuthRedirect'

import Button from '@/ui/form-elements/Button'
import Heading from '@/ui/heading/Heading'

import { useAction } from '@/hooks/useAction'
import { useAuth } from '@/hooks/useAuth'

import Meta from '@/utils/meta/Meta'

import styles from './Auth.module.scss'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()
	const [type, setType] = useState<'login' | 'register'>('login')
	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})
	const { login, register } = useAction()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)

		reset()
	}

	return (
		<Meta title="Auth">
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Авторизация" className="mb-6" />

					<AuthFields
						register={registerInput}
						// @ts-ignore
						formState={formState}
						isPasswordRequired
					/>

					<div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Логин
						</Button>
						<Button
							type="submit"
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Регистрация
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth
