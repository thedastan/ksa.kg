import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { ToastError } from '@/config/helpers'

import { profileService } from '@/services/profile.service'

export function useProfile() {
	const { data, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => profileService.get()
	})

	return { user: data, isLoading }
}

export function useProfileUpdate(isConfirmPage?: boolean) {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationKey: ['update-profile'],
		mutationFn: (data: any) => profileService.update(data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['profile'] })
			toast.success(
				isConfirmPage
					? `Данные подтверждены, Добро пожаловать`
					: 'Данные обновлены'
			)
		},
		onError(e) {
			ToastError(e)
		}
	})

	return { mutate, isPending }
}

export function useAvatarUpdate() {
	const queryClient = useQueryClient()
	const { mutate, isPending } = useMutation({
		mutationKey: ['avatar-update'],
		mutationFn: (file: File) => profileService.updateAvatar(file),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['profile'] })
			toast.success('Фото профиля загружается')
		},
		onError(e) {
			ToastError(e)
		}
	})

	return { mutate, isPending }
}

export function getFullName(
	firsName: string | undefined,
	lastName: string | undefined
) {
	const first_name = firsName ? firsName : ''
	const last_name = lastName ? ` ${lastName}` : ''
	return first_name + last_name || 'ФИО'
}
