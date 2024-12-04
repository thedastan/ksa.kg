import { Metadata } from 'next'

import Tariffs from '@/components/personal-account/tariffs'

import { NO_INDEX_PAGE } from '@/constants/seo/seo.constants'

export const metadata: Metadata = {
	title: 'Тарифы',
	...NO_INDEX_PAGE
}
export default function TariffsPage() {
	return <Tariffs />
}
