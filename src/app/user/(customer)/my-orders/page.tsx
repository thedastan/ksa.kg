import { Metadata } from 'next'

import MyCompanies from '@/components/personal-account/(manufacturer)/my-companies'

import { NO_INDEX_PAGE } from '@/constants/seo/seo.constants'
import MyOrders from '@/components/personal-account/(customer)/my-orders'

export const metadata: Metadata = {
	title: 'Мои заказы',
	...NO_INDEX_PAGE
}
export default function MyOrderPage() {
	return <MyOrders />
}
