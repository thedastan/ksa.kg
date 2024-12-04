import { Metadata } from 'next'

import Notifications from '@/components/personal-account/notifications'

import { NO_INDEX_PAGE } from '@/constants/seo/seo.constants'

export const metadata: Metadata = {
	title: 'Уведомления',
	...NO_INDEX_PAGE
}
export default function NotificationPage() {
	return <Notifications />
}
