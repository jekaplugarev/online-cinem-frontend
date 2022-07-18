import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IActorEditInput } from '@/screens/admin/actors/actor-edit.interface'

import { ActorService } from '@/services/actor.service'

import { getKeys } from '@/utils/object/getKeys'
import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/config/url.config'

export const useActorEdit = (setValue: UseFormSetValue<IActorEditInput>) => {
	const { push, query } = useRouter()
	const actorId = String(query.id)
	const { isLoading } = useQuery(
		['actor', actorId],
		() => ActorService.getById(actorId),
		{
			onError: (error) => {
				toastError(error, 'Получение актера')
			},
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => setValue(key, data[key]))
			},
			enabled: !!query.id,
		}
	)
	const { mutateAsync } = useMutation(
		'update actor',
		(data: IActorEditInput) => ActorService.update(actorId, data),
		{
			onError: (error) => {
				toastError(error, 'Обновление актера')
			},
			onSuccess: () => {
				toastr.success('Обновление актера', 'Обновление актера прошло успешно')
				push(getAdminUrl('actors'))
			},
		}
	)
	const onSubmit: SubmitHandler<IActorEditInput> = async (data) =>
		await mutateAsync(data)

	return { isLoading, onSubmit }
}
