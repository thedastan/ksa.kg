'use client'

import { Box, Container, Flex, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import ActiveoneComponent from '@/components/activity/activeone'
import JustComponent from '@/components/association/just'
import Description from '@/components/ui/texts/Description'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import { activity_pages } from './data'

export default function ActivityLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const pathname = usePathname()
	const isLastPage = pathname === activity_pages[activity_pages.length - 1].path

	return (
		<Container
			maxW='1090px'
			pt='39px'
		>
			<Flex gap={{ xl: '157px', md: '50px' }}>
				<Box
					w='100%'
					maxW='700px'
				>
					{children}
				</Box>

				<Stack
					display={{ md: 'flex', base: 'none' }}
					pl='10px'
					borderLeft='solid 1px #4a4a4a7e'
					h='100%'
					w='233px'
				>
					<Link href={"/activity/activityone"}> 
					<Description
						fontWeight={600}
						color='#3046BF'
					>
						Деятельность
					</Description>
					</Link>
					{activity_pages.map((el, idx) => (
						<Link
							href={el.path}
							key={idx}
						>
							<Description
								fontSize={14}
								fontWeight={pathname === el.path ? 600 : 400}
								color={pathname === el.path ? 'black' : '#4a4a4a7e'}
							>
								{el.name}
							</Description>
						</Link>
					))}
				</Stack>
			</Flex>
			{isLastPage && (
				<Box>
					<ActiveoneComponent />
				</Box>
			)}
		</Container>
	)
}
