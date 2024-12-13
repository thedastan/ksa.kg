import { ChakraProps, Text } from '@chakra-ui/react'

interface Props extends ChakraProps {
	children: string
}
const Title14 = ({
	children,
	fontWeight = '600',
	fontSize = '14px',
	lineHeight = '16.94px',
	color = '#1C1B1F',
	...props
}: Props) => {
	return (
		<Text
			{...props}
			color={color}
			fontWeight={fontWeight}
			lineHeight={lineHeight}
			fontSize={fontSize}
		>
			{children}
		</Text>
	)
}

export default Title14
