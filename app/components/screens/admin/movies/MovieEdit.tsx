import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'

import { IMovieEditInput } from '@/screens/admin/movies/movie-edit.interface'
import { useMovieEdit } from '@/screens/admin/movies/useMovieEdit'

import SkeletonLoader from '@/ui/SkeletonLoader'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Button from '@/ui/form-elements/Button'
import Field from '@/ui/form-elements/Field'
import SlugField from '@/ui/form-elements/SlugField/SlugField'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'
import { generateSlug } from '@/utils/string/generateSlug'

import formStyles from '../../../ui/form-elements/admin-form.module.scss'

const DynamicTextEditor = dynamic(
	() => import('@/ui/form-elements/TextEditor'),
	{
		ssr: false,
	}
)

const MovieEdit: FC = () => {
	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<IMovieEditInput>({ mode: 'onChange' })
	const { isLoading, onSubmit } = useMovieEdit(setValue)

	return (
		<Meta title="Редактирование фильма">
			<AdminNavigation />
			<Heading title="Редактирование фильма" />

			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Field
								{...register('name', {
									required: 'Название обязательно',
								})}
								placeholder="Название"
								error={errors.name}
								style={{ width: '31%' }}
							/>

							<div style={{ width: '31%' }}>
								<SlugField
									register={register}
									generate={() =>
										setValue('slug', generateSlug(getValues('name')))
									}
									error={errors.slug}
								/>
							</div>

							<Field
								{...register('icon', {
									required: 'Иконка обязательна',
								})}
								placeholder="Иконка"
								error={errors.icon}
								style={{ width: '31%' }}
							/>
						</div>

						<Controller
							control={control}
							name="description"
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<DynamicTextEditor
									onChange={onChange}
									value={value}
									placeholder="Описание"
									error={error}
								/>
							)}
							rules={{
								validate: {
									required: (v) =>
										(v && stripHtml(v).result.length > 0) ||
										'Описание обязательно',
								},
							}}
						/>

						<Button>Обновить</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default MovieEdit
