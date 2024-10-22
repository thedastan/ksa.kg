import { ChakraProps, Heading } from '@chakra-ui/react'

interface Props extends ChakraProps {
	children: string
}
const TitleComponent = ({
	children,
	fontWeight = '700',
	fontSize = '34px',
	lineHeight = '39.1px',
	color = '#12141D',
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

export default TitleComponent
