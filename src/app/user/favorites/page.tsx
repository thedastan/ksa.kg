import { Metadata } from 'next'

import Favorites from '@/components/personal-account/favorites'

import { NO_INDEX_PAGE } from '@/constants/seo/seo.constants'

export const metadata: Metadata = {
	title: 'Избранные',
	...NO_INDEX_PAGE
}
export default function FavoritesPage() {
	return <Favorites />
}
