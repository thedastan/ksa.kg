import { Flex, Text } from '@chakra-ui/react'

const Spinner = ({ fixed = true }: { fixed?: boolean }) => {
	return (
		<Flex
			position={fixed ? 'fixed' : 'relative'}
			top='0'
			bottom='0'
			left='0'
			right='0'
			justifyContent='center'
			alignItems='center'
			zIndex='40'
		>
			<div className='spinner'></div>

			<Flex
				position='absolute'
				w='100%'
				h='100%'
				justifyContent='center'
				alignItems='center'
			>
				<Text
					fontSize='8px'
					color='#FFFFFF'
					opacity='.7'
					fontWeight='400'
				>
					Подождите...
				</Text>
			</Flex>
		</Flex>
	)
}

export default Spinner
