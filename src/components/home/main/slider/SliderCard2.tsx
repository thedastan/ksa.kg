import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

import DefButton from '@/components/ui/buttons/DefButton'
import Description from '@/components/ui/texts/Description'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import img from '@/assets/img/sliderimg.png'
 

import users from '@/assets/img/users.png'

const SliderCard2 = () => {
	return (
		<Box
			w='100%'
			h={{ md: '570px', base: '100%' }}
			bg='#F3F4FB'
			borderRadius={30}
			p={{ md: 10, base: 4 }}
		>
			<Flex
				flexDirection={{ md: 'row', base: 'column-reverse' }}
				alignItems='center'
				justifyContent='center'
			>
				<Flex
					gap={6}
					w={{ md: '720px', base: '100%' }}
					flexDir='column'
					alignItems='start'
				>
					<TitleComponent
					display={{ md: "flex", base:"none" }}
						lineHeight={{ md: '70px', base: '30px' }}
						fontSize={{ md: 60, base: 22 }}
					>
						Присоединяйтесь к швейной ассоциации!
					</TitleComponent>
					<Flex
						flexDir='column'
						gap={2}
						borderLeft='solid 4px #E3484F'
						pl={4}
						w={{ md: '660px', base: '100%' }}
					>
						<Description fontSize={{ md: 18, base: 17 }}>
							Станьте частью инновационного сообщества, которое поддерживает
							развитие швейной индустрии.
						</Description>
						<Description mt={2} fontSize={{ md: 18, base: 17 }}>
							Расширьте свои деловые контакты, познакомьтесь с потенциальными
							партнерами, клиентами и специалистами в отрасли швейных дел.
						</Description>
					</Flex>
					<DefButton
						fontSize={16}
						fontWeight={600}
						bg='#E3484F'
						w={{ md: 258, base: "100%" }}
						h={{ md: '48px', base: '48px' }}
					>
						Присоединиться
					</DefButton>
				</Flex>
				<Box
					w={{ md: '473px', base: '100%' }}
					mt={{ md: '0', base: '10px' }}
					pb={{ md: 0, base: 6 }}
				>
					<TitleComponent
					display={{ md: "none", base:"block" }}
						lineHeight={{ md: '70px', base: '30px' }}
						fontSize={{ md: 60, base: 22 }}
					>
						Присоединяйтесь к швейной ассоциации!
					</TitleComponent>
					<Box
					mt={{ md: '0', base: '10px' }}
						overflow='hidden'
						w={{ md: '473px', base: '100%' }}
					>
						<Image
							style={{ width: '100%', height: '100%', objectFit: 'cover' }}
							src={img}
							alt='img'
						/>
					</Box>
					<Box
						mt={{ md: '-120px', base: '-110px' }}
						ml={{ md: '267px', base: '10px' }}
						position='absolute'
						p={4}
						bg='white'
						borderRadius={10}
					>
						<Flex
							alignItems='center'
							gap={3}
						>
							<Image
								style={{ width: '38px', height: '38px' }}
								src={users}
								alt='img'
							/>
							<Text
								color='#3046BF'
								fontSize={26}
								fontWeight={700}
							>
								50,000+
							</Text>
						</Flex>
						<Text
							mt={2}
							color='grey'
							fontSize={14}
							fontWeight={400}
						>
							Сотрудников в Отрасли
						</Text>
					</Box>
				</Box>
			</Flex>
		</Box>
	)
}

export default SliderCard2
