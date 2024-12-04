import { Box } from '@chakra-ui/react'

import UserDashboard from '@/components/ui/providers/user-dashboard'
import Title24 from '@/components/ui/texts/Title24'

const Profile = () => {
	return (
		<UserDashboard py={'40px'}>
			<Title24>Профиль</Title24>
		</UserDashboard>
	)
}

export default Profile
