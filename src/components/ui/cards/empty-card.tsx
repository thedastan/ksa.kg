import { Box, Flex, Stack } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

import Description from '../texts/Description'
import Title24 from '../texts/Title24'

interface EmptyCardProps {
	title: string
	description: string
	icon: IconType
}
const EmptyCard = (props: EmptyCardProps) => {
	return (
		<Flex
			h='591px'
			justifyContent='center'
			alignItems='center'
		>
			<Stack
				alignItems='center'
				textAlign='center'
			>
				<Flex
					w='147px'
					h='147px'
					bg='#EAEEF9'
					rounded='50%'
					justifyContent='center'
					alignItems='center'
				>
					<props.icon
						color='#B0BACC'
						fontSize='86px'
					/>
				</Flex>
				<Title24 mt='33px'>{props.title}</Title24>
				<Description
					mt='5'
					lineHeight='26px'
					maxW='484px'
				>
					{props.description}
				</Description>
			</Stack>
		</Flex>
	)
}

export default EmptyCard
