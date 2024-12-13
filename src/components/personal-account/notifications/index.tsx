import { Box, Stack } from '@chakra-ui/react'
import { LiaTimesSolid } from 'react-icons/lia'

import EmptyCard from '@/components/ui/cards/empty-card'
import NotificationsCard from '@/components/ui/cards/notifications-card'
import UserDashboard from '@/components/ui/providers/user-dashboard'
import Title24 from '@/components/ui/texts/Title24'

const Notifications = () => {
	const data = []
	return !!data?.length ? (
		<Box pt='22px'>
			<Title24>Уведомления</Title24>

			<Stack
				spacing='14px'
				mt='5'
			>
				<NotificationsCard />
				<NotificationsCard />
				<NotificationsCard />
			</Stack>
		</Box>
	) : (
		<UserDashboard py='0'>
			<EmptyCard
				title='Сообщения'
				description='Здесь вы можете увидеть сообщения о ваших активностях, об откликах заказчиков.'
				icon={LiaTimesSolid}
			/>
		</UserDashboard>
	)
}

export default Notifications
