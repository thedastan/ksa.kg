import { Metadata } from 'next'

import AllCompanies from '@/components/company/all-companies'

import { NO_INDEX_PAGE } from '@/constants/seo/seo.constants'

export const metadata: Metadata = {
	title: 'Каталог компаний',
	...NO_INDEX_PAGE
}
export default function CompaniesPage() {
	return <AllCompanies />
}
