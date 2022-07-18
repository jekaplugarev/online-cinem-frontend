import dynamic from 'next/dynamic'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { IActorEditInput } from '@/screens/admin/actors/actor-edit.interface'
import { useActorEdit } from '@/screens/admin/actors/useActorEdit'

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

const ActorEdit: FC = () => {
	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<IActorEditInput>({ mode: 'onChange' })
	const { isLoading, onSubmit } = useActorEdit(setValue)

	return (
		<Meta title="Редактирование актера">
			<AdminNavigation />
			<Heading title="Редактирование актера" />

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
							/>
							<SlugField
								register={register}
								generate={() =>
									setValue('slug', generateSlug(getValues('name')))
								}
								error={errors.slug}
							/>

							{/*<Controller*/}
							{/*	control={control}*/}
							{/*	name="photo"*/}
							{/*	defaultValue=""*/}
							{/*	render={({*/}
							{/*		field: { value, onChange },*/}
							{/*		fieldState: { error },*/}
							{/*	}) => (*/}
							{/*		//photo upload*/}
							{/*	)}*/}
							{/*	rules={{*/}
							{/*		required: 'Фото обязательно'*/}
							{/*	}}*/}
							{/*/>*/}
						</div>
						<Button>Обновить</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default ActorEdit
