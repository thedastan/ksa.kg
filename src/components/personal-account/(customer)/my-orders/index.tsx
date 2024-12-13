import { Box, Flex } from '@chakra-ui/react'

import UserDashboard from '@/components/ui/providers/user-dashboard'
import Title24 from '@/components/ui/texts/Title24'

const MyOrders = () => {
	return (
		<UserDashboard py={'40px'}>
			<Title24>Мои заказы</Title24>
		</UserDashboard>
	)
}

export default MyOrders
