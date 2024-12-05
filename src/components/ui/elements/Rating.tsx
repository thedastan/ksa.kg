import { Flex, Text } from '@chakra-ui/react'
import { TiStar } from 'react-icons/ti'

const Rating = () => {
	return (
		<Flex
			gap='2'
			alignItems='center'
		>
			<Text
				fontWeight='600'
				fontSize='14px'
				lineHeight='32px'
				color='#12141D'
				letterSpacing='-0.5px'
			>
				0.0 / 5
			</Text>
			<Flex>
				{[1, 2, 3, 4, 5].map(star => (
					<TiStar
						key={star}
						color='#FFC947'
						fontSize='18px'
					/>
				))}
			</Flex>
		</Flex>
	)
}

export default Rating
