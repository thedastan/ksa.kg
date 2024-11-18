'use client'

import { Box } from '@chakra-ui/react'
import {
	HydrationBoundary,
	QueryClient,
	QueryClientProvider,
	dehydrate
} from '@tanstack/react-query'
import { PropsWithChildren, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Toaster } from 'sonner'

import { HEADER_HEIGHT } from '@/config/_variables.config'

import { persistor, store } from '@/store/store'
import Header from '@/components/navbar/header'

export function Providers({ children }: PropsWithChildren) {
	const [innerHeight, setHeight] = useState(0)

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

	useEffect(() => {
		setHeight(document.documentElement.clientHeight)
	}, [])

	return (
		<QueryClientProvider client={client}>
			{/* <HydrationBoundary state={dehydratedState}>
				<Provider store={store}>
					<PersistGate
						persistor={persistor}
						loading={null}
					> */}
			<>
				<Box
					mx='auto'
					minH={innerHeight ? innerHeight + 'px' : '100vh'}
					bg='#FFFFFF'
					pt={HEADER_HEIGHT}
				>
					
					{children}
				</Box>
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
			</>
			{/* </PersistGate>
				</Provider>
			</HydrationBoundary> */}
		</QueryClientProvider>
	)
}
