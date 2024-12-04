import { Box, Stack } from '@chakra-ui/react'

import CompanyCard from '@/components/ui/cards/company-card'
import Title24 from '@/components/ui/texts/Title24'

const MyCompanies = () => {
	return (
		<Box pt='22px'>
			<Title24>Мои компании</Title24>
			<Stack
				spacing='5'
				mt='5'
			>
				<CompanyCard />
			</Stack>
		</Box>
	)
}

export default MyCompanies
