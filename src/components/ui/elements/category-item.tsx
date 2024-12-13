import { Box } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

const CategoryItem = (props: PropsWithChildren) => {
	return (
		<Box
			border='1px solid #E6E6E6'
			rounded='100px'
			whiteSpace='nowrap'
			px='14px'
			py='2'
			h='29px'
			fontWeight='400'
			fontSize='10px'
			lineHeight='13.04px'
			color='#000000'
		>
			{props.children}
		</Box>
	)
}

export default CategoryItem
