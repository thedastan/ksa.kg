import { Box, Container, Flex } from '@chakra-ui/react'

import AccountNavbar from '@/components/personal-account/navbar'
import ContainerDefault from '@/components/ui/providers/container'

export default function CustomerUserLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Box
			mt='30px'
			pb='200px'
		>
			<ContainerDefault>
				<Flex gap={{ lg: '38px', base: '5' }}>
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
