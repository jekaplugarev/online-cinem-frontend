import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { IGenreEditInput } from '@/screens/admin/genres/genre-edit.interface'
import { useGenreEdit } from '@/screens/admin/genres/useGenreEdit'

import SkeletonLoader from '@/ui/SkeletonLoader'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Field from '@/ui/form-elements/Field'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const GenreEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<IGenreEditInput>({ mode: 'onChange' })
	const { isLoading, onSubmit } = useGenreEdit(setValue)

	return (
		<Meta title="Редактирование жанра">
			<AdminNavigation />
			<Heading title="Редактирование жанра" />
			<form onSubmit={handleSubmit(onSubmit)}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div>
							<Field
								{...register('name', {
									required: 'Название обязательно',
								})}
								placeholder="Название"
								error={errors.name}
								style={{ width: '31%' }}
							/>
							<Field
								{...register('icon', {
									required: 'Иконка обязательна',
								})}
								placeholder="Иконка"
								error={errors.icon}
								style={{ width: '31%' }}
							/>
							<button>Обновить</button>
						</div>
					</>
				)}
			</form>
		</Meta>
	)
}

export default GenreEdit
