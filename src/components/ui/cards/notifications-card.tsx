import { Box, Flex, Text } from '@chakra-ui/react'

import Description from '../texts/Description'

const NotificationsCard = () => {
	return (
		<Flex
			justifyContent='space-between'
			alignItems='center'
			px='10'
			py='22px'
			gap='30px'
			bg='#F7F7F7'
			rounded='12px'
			position='relative'
			overflow='hidden'
		>
			<Box
				position='absolute'
				left='0'
				top='0'
				h='100%'
				w='5px'
				bg='#3046BF'
			/>
			<Description
				lineHeight='19.36px'
				maxW='485px'
				pl='5px'
				opacity='.8'
			>
				Здесь вы можете увидеть сообщения о ваших активностях, об откликах
				заказчиков.
			</Description>

			<Text
				fontSize='12px'
				lineHeight='18px'
				color='#12141D'
				opacity='.5'
			>
				06.09.2024  |  17:52
			</Text>
		</Flex>
	)
}

export default NotificationsCard
