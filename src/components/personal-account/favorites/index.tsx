import { Box, Stack } from '@chakra-ui/react'
import { GoHeart } from 'react-icons/go'
import { PiHeart } from 'react-icons/pi'

import CompanyCard from '@/components/ui/cards/company-card'
import EmptyCard from '@/components/ui/cards/empty-card'
import UserDashboard from '@/components/ui/providers/user-dashboard'
import Title24 from '@/components/ui/texts/Title24'

const Favorites = () => {
	const data = []
	return !!data?.length ? (
		<Box pt='22px'>
			<Title24>Избранные</Title24>
			<Stack
				spacing='5'
				mt='5'
			>
				<CompanyCard />
			</Stack>
		</Box>
	) : (
		<UserDashboard py='0'>
			<EmptyCard
				title='Избранные'
				description='У вас пока нет избранных компаний'
				icon={PiHeart}
			/>
		</UserDashboard>
	)
}

export default Favorites
