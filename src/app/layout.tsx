import { ChakraProvider } from '@chakra-ui/react'
import type { Metadata, Viewport } from 'next'

import { inter } from '@/constants/fonts/fonts'
import { SITE_NAME } from '@/constants/seo/seo.constants'

import { THEME_COLOR } from '@/config/_variables.config'

import Head from './Head'
import { Providers } from './providers'
import '@/styles/globals.scss'

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'каталог, объединяющий всех участников легкой промышленности'
}

export const viewport: Viewport = {
	themeColor: THEME_COLOR
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<Head />
			<body className={inter.className}>
				<ChakraProvider>
					<Providers>{children}</Providers>
				</ChakraProvider>

				{/* <YandexMetrika /> */}
			</body>
		</html>
	)
}
