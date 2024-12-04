import { Box, ResponsiveValue } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

interface UserDashboardProps extends PropsWithChildren {
	py: ResponsiveValue<string>
}
const UserDashboard = (props: UserDashboardProps) => {
	return (
		<Box
			rounded='20px'
			bg='#F7F7F7'
			px='29px'
			py={props.py}
		>
			{props.children}
		</Box>
	)
}

export default UserDashboard
