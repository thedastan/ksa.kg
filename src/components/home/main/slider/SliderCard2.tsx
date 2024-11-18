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
			bg='#F3F4FB'
			borderRadius={30}
			p={{ md: 10, base: 4 }}
		>
			<Flex
				flexDirection={{ md: 'row', base: 'column' }}
				alignItems='center'
			>
				<Flex
					gap={6}
					w={{ md: '720px', base: '100%' }}
					flexDir='column'
					alignItems='start'
				>
					<TitleComponent
						lineHeight={{ md: '70px', base: '40px' }}
						fontSize={{ md: 60, base: 28 }}
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
						<Description>
							Станьте частью инновационного сообщества, которое поддерживает
							развитие швейной индустрии.
						</Description>
						<Description fontSize={18}>
							Расширьте свои деловые контакты, познакомьтесь с потенциальными
							партнерами, клиентами и специалистами в отрасли швейных дел.
						</Description>
					</Flex>
					<DefButton
						fontSize={16}
						fontWeight={600}
						bg='#E3484F'
						w={{ md: 258, base: 230 }}
						h={{ md: '48px', base: '40px' }}
					>
						Присоединиться
					</DefButton>
				</Flex>
				<Box w={{ md: '473px', base: '100%' }} mt={{ md: '0', base: '40px' }}>
					 <Box overflow="hidden"    w={{ md: '473px', base: '100%' }}>
           <Image
						style={{ width: '100%', height: '100%', objectFit:"cover" }}
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