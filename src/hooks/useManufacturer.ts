import { useQuery } from '@tanstack/react-query'

import { manufacturerService } from '@/services/manufacturer.service'

export function useCompanies() {
	const { data, isLoading } = useQuery({
		queryKey: ['companies'],
		queryFn: () => manufacturerService.getCompanies()
	})

	return { data, isLoading }
}

export function useSubcategory() {
	const { data, isLoading } = useQuery({
		queryKey: ['subcategory'],
		queryFn: () => manufacturerService.getSubcategories()
	})

	return { data, isLoading }
}
