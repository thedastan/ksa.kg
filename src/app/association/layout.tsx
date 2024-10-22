import { Box, Container, Flex, Stack } from '@chakra-ui/react'
import Link from 'next/link'

import Description from '@/components/ui/texts/Description'

import { association_pages } from './data'

export default function AssociationLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Container
			maxW='1090px'
			pt='39px'
		>
			<Flex gap={{ xl: '157px', md: '50px' }}>
				<Box maxW='700px'>{children}</Box>

				<Stack w='233px'>
					{association_pages.map((el, idx) => (
						<Link
							href={el.path}
							key={idx}
						>
							<Description>{el.name}</Description>
						</Link>
					))}
				</Stack>
			</Flex>
		</Container>
	)
}
