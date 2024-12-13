import { Metadata } from 'next'

import CatalogCompany from '@/components/personal-account/catalog'

import { NO_INDEX_PAGE } from '@/constants/seo/seo.constants'

export const metadata: Metadata = {
	title: 'Каталог компаний',
	...NO_INDEX_PAGE
}
export default function CatalogPage() {
	return <CatalogCompany />
}
