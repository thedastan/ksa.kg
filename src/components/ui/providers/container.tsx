import { Container } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

const ContainerDefault = ({ children }: PropsWithChildren) => {
	return (
		<Container
			maxW={'1800px'}
			px={{ '2xl': '50px', base: '4' }}
		>
			{children}
		</Container>
	)
}

export default ContainerDefault
