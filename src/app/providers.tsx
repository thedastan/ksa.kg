'use client'

import { Box } from '@chakra-ui/react'
import {
	HydrationBoundary,
	QueryClient,
	QueryClientProvider,
	dehydrate
} from '@tanstack/react-query'
import { PropsWithChildren, useState } from 'react'
import { Provider } from 'react-redux'
import { Toaster } from 'sonner'

import Footer from '@/components/navbar/footer'
import Header from '@/components/navbar/header'

import { HEADER_HEIGHT } from '@/config/_variables.config'

import { store } from '@/store/store'

export function Providers({ children }: PropsWithChildren) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false
				}
			}
		})
	)
	const dehydratedState = dehydrate(client)

	return (
		<QueryClientProvider client={client}>
			<HydrationBoundary state={dehydratedState}>
				{/*<Provider store={store}>
					<PersistGate
						persistor={persistor}
						loading={null}
					> */}
				<Header />
				<Box
					mx='auto'
					minH='100vh'
					bg='#FFFFFF'
					pt={HEADER_HEIGHT}
				>
					{children}
				</Box>
				<Footer />
				<Toaster
					theme='light'
					position='top-center'
					duration={4000}
					toastOptions={{
						style: {
							background: '#FFFFFF',
							border: 'none',
							borderRadius: '12px',
							color: '#00000080',
							fontSize: '14px',
							fontWeight: '500',
							backgroundBlendMode: 'luminosity',
							minHeight: '60px'
						}
					}}
				/>
				{/* </PersistGate>
				</Provider>*/}
			</HydrationBoundary>
		</QueryClientProvider>
	)
}
