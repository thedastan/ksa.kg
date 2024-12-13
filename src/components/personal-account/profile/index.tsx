'use client'

import { Box, Button, Flex, SimpleGrid } from '@chakra-ui/react'
import { FiEdit } from 'react-icons/fi'

import { SocialMediaIcons } from '@/components/navbar/data'
import InputComponent from '@/components/ui/inputs/InputComponent'
import PhoneInputComponent from '@/components/ui/inputs/PhoneInputComponent'
import UserDashboard from '@/components/ui/providers/user-dashboard'
import Title24 from '@/components/ui/texts/Title24'

const Profile = () => {
	return (
		<UserDashboard py={'40px'}>
			<Box
				maxW='720px'
				mx='auto'
				pb='4'
			>
				<Flex
					justifyContent='space-between'
					alignItems='end'
				>
					<Title24>Профиль</Title24>
					<Button
						variant='none'
						maxH='30px'
						w='140px'
						rounded='33px'
						bg='transparent'
						border='1px solid #C9CCCF'
						color='#12141D'
						fontSize='12px'
						fontWeight='400'
						lineHeight='20px'
						p='0'
						gap='5px'
						alignItems='center'
					>
						<FiEdit fontSize='18px' />
						Редактировать
					</Button>
				</Flex>

				<SimpleGrid
					mt='10'
					columns={2}
					spacingX='46px'
				>
					<PhoneInputComponent
						title='Основной номер*'
						isLight={true}
					/>
					<InputComponent
						placeholder='Выберите страну и город'
						title='Страна/Город*'
						isLight={true}
					/>
					<InputComponent
						placeholder='example@gmail.com'
						title='Email*'
						type='email'
						name='email'
						isLight={true}
					/>
					<InputComponent
						placeholder='Адрес на карте'
						title='Адрес*'
						name='address'
						isLight={true}
					/>
				</SimpleGrid>

				<Title24 mt='26px'>Контакты</Title24>
				<SimpleGrid
					mt='10'
					columns={2}
					spacingX='46px'
				>
					<InputComponent
						placeholder='@nickname_'
						title='Телеграм'
						name='telegram'
						isRequired={false}
						RightElement={SocialMediaIcons.TELEGRAM}
						isLight={true}
					/>

					<InputComponent
						placeholder='Номер WhatsApp'
						title='WhatsApp'
						name='whatsapp'
						isRequired={false}
						RightElement={SocialMediaIcons.WHATSAPP}
						isLight={true}
					/>
					<InputComponent
						placeholder='@nickname_'
						title='YouTube*'
						name='youtube'
						isRequired={false}
						RightElement={SocialMediaIcons.YOUTUBE}
						isLight={true}
					/>
					<InputComponent
						placeholder='@nickname_'
						title='Инстаграм'
						name='instagram'
						isRequired={false}
						RightElement={SocialMediaIcons.INSTAGRAM}
						isLight={true}
					/>
				</SimpleGrid>
			</Box>
		</UserDashboard>
	)
}

export default Profile
