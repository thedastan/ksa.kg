import { Box, SimpleGrid, Stack } from '@chakra-ui/react'

import InputComponent from '@/components/ui/inputs/InputComponent'
import UserDashboard from '@/components/ui/providers/user-dashboard'
import Title24 from '@/components/ui/texts/Title24'

const PlaceAnOrder = () => {
	return (
		<UserDashboard py='10'>
			<Box
				maxW='720px'
				mx='auto'
				pb='4'
			>
				<Title24 textAlign='center'>Детали заказа</Title24>
				<SimpleGrid
					mt='10'
					columns={2}
					spacingX='46px'
				>
					<InputComponent
						title='Название заказа*'
						placeholder='“Пошив платья”'
						isLight={true}
					/>
					<InputComponent
						title='Краткое описание*'
						placeholder='Опишите изделие'
						isLight={true}
					/>
					<InputComponent
						title='Количество изделий*'
						placeholder='---'
						isLight={true}
					/>
					<InputComponent
						title='Цена*'
						placeholder='---'
						isLight={true}
					/>
					<InputComponent
						title='Ед.изм*'
						placeholder='шт.'
						isLight={true}
					/>
					<InputComponent
						title='Валюта*'
						placeholder='Рубль'
						isLight={true}
					/>
				</SimpleGrid>
			</Box>
		</UserDashboard>
	)
}

export default PlaceAnOrder
