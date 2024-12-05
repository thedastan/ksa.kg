import { Metadata } from 'next'

import MyCompanies from '@/components/personal-account/my-companies'

import { NO_INDEX_PAGE } from '@/constants/seo/seo.constants'

export const metadata: Metadata = {
	title: 'Мои компании',
	...NO_INDEX_PAGE
}
export default function MyCompaniesPage() {
	return <MyCompanies />
}
