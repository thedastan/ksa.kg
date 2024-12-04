import { Box, Container, Flex } from '@chakra-ui/react'

import AccountNavbar from '@/components/personal-account/navbar'
import ContainerDefault from '@/components/ui/providers/container'

export default function CustomerUserLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Box mt='30px'>
			<ContainerDefault>
				<Flex gap='38px'>
					<AccountNavbar />

					<Box
						maxW='100%'
						w='100%'
					>
						{children}
					</Box>
				</Flex>
			</ContainerDefault>
		</Box>
	)
}
