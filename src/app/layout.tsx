import { ChakraProvider } from '@chakra-ui/react'
import type { Metadata, Viewport } from 'next'

import { inter } from '@/constants/fonts/fonts'
import { SITE_NAME } from '@/constants/seo/seo.constants'

import { THEME_COLOR } from '@/config/_variables.config'

import Head from './Head'
import { Providers } from './providers'
import '@/styles/globals.scss'
import Header from '@/components/navbar/header'
import Footer from '@/components/navbar/footer'

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
			 
			<body className={inter.className}>
				<ChakraProvider>
				<Header />
					<Providers>{children}</Providers>

					<Footer/>
				</ChakraProvider>

				{/* <YandexMetrika /> */}
			</body>
		</html>
	)
}
