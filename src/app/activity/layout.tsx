'use client'

import { Box, Container, Flex, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Description from '@/components/ui/texts/Description'

import JustComponent from '@/components/association/just'
import { activity_pages } from './data'

export default function ActivityLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const pathname = usePathname()

	return (
		<Container
			maxW='1090px'
			pt='39px'
		>
			<Flex gap={{ xl: '157px', md: '50px' }}>
				<Box w="100%"   maxW='700px'>{children}</Box>

				<Stack  
				display={{ md: "flex", base: 'none' }}
					pl='10px'
					borderLeft='solid 1px #4a4a4a7e'
					h='100%'
					w='233px'
				>
					<Description
						fontWeight={600}
						color='#3046BF'
					>
						Деятельность
					</Description>
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
			 
		</Container>
	)
}
