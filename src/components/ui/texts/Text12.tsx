import { ChakraProps, Text } from '@chakra-ui/react'

interface Props extends ChakraProps {
	children: string
}
const Text12 = ({
	children,
	fontWeight = '400',
	fontSize = '12px',
	lineHeight = '24px',
	color = '#12141D',
	textTransform = 'uppercase',
	opacity = '.7',
	...props
}: Props) => {
	return (
		<Text
			{...props}
			color={color}
			fontWeight={fontWeight}
			lineHeight={lineHeight}
			fontSize={fontSize}
			textTransform={textTransform}
			opacity={opacity}
		>
			{children}
		</Text>
	)
}

export default Text12
