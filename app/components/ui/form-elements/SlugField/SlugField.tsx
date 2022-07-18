import { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

import Field from '@/ui/form-elements/Field'

import styles from './SlugField.module.scss'

interface ISlugField {
	error?: FieldError
	register: UseFormRegister<any>
	generate: () => void
}

const SlugField: FC<ISlugField> = ({ error, register, generate }) => {
	return (
		<div className="relative">
			<Field
				{...register('slug', {
					required: 'Поисковой запрос обязателен',
				})}
				placeholder="Поисковой запрос"
				error={error}
			/>
			<div className={styles.badge} onClick={generate}>
				Сгенерировать
			</div>
		</div>
	)
}

export default SlugField
