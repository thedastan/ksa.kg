import { Metadata } from 'next'

import PlaceAnOrder from '@/components/personal-account/(customer)/place-an-order'

import { NO_INDEX_PAGE } from '@/constants/seo/seo.constants'

export const metadata: Metadata = {
	title: 'Разместить заказ',
	...NO_INDEX_PAGE
}
export default function PlaceAnOrderPage() {
	return <PlaceAnOrder />
}
