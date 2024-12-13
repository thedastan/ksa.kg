import { Metadata } from 'next'

import CreateCompany from '@/components/personal-account/(manufacturer)/create-company'

import { NO_INDEX_PAGE } from '@/constants/seo/seo.constants'

export const metadata: Metadata = {
	title: 'Создать компанию',
	...NO_INDEX_PAGE
}
export default function CreateCompanyPage() {
	return <CreateCompany />
}
