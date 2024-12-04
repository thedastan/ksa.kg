import { ChakraProps, Heading } from '@chakra-ui/react'

interface Props extends ChakraProps {
	children: string
}
const Title24 = ({
	children,
	fontWeight = '600',
	fontSize = '24px',
	lineHeight = '29.05px',
	color = '#000000',
	...props
}: Props) => {
	return (
		<Heading
			as='h1'
			{...props}
			color={color}
			fontWeight={fontWeight}
			lineHeight={lineHeight}
			fontSize={fontSize}
		>
			{children}
		</Heading>
	)
}

export default Title24
