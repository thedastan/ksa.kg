import { Box, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FaCrown } from 'react-icons/fa'
import { IoMdCheckmark } from 'react-icons/io'

import DefButton from '@/components/ui/buttons/DefButton'
import Description from '@/components/ui/texts/Description'
import Title from '@/components/ui/texts/Title'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const data = [
	{
		desc: 'Полная информация о фабрике на детальной странице'
	},
	{
		desc: 'Возможность откликаться только на 3 заказа в месяц'
	}
]

const data_vip = [
	{
		desc: 'Включает всё из тарифа Комфорт'
	},
	{
		desc: 'Без ограничений на отклики на заказы'
	},
	{
		desc: 'Галочка "проверено" для фабрики'
	},
	{
		desc: 'Выделение в поиске и списке фабрик'
	},
	{
		desc: 'Первенство в списке откликов'
	}
]

const Tariffs = () => {
	return (
		<Box p="100px 0">
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					flexDirection='column'
					gap={6}
					p='30px 0'
					justifyContent='center'
					alignItems='center'
					textAlign='center'
				>
					<Title fontSize={42}>Тарифы</Title>
					<Description
						lineHeight='26px'
						w={{ md: 552, base: '100%' }}
						textAlign='center'
					>
						Выберите подходящий тариф для эффективного размещения заказов и
						сотрудничества с лучшими швейными фабриками.
					</Description>
				</Flex>
				<Flex
					justifyContent='center'
					gap={4}
					alignItems='center'
					flexDirection={{ md: 'row', base: 'column' }}
				>
					<Flex
						flexDirection='column'
						justifyContent='space-between'
						bg='#18181B'
						color='white'
						w={{ md: 320, base: '100%' }}
						h='425px'
						p={6}
						borderRadius={20}
						textAlign='center'
					>
						<Flex
							flexDirection='column'
							gap={6}
						>
							<Text
								fontSize={12}
								fontWeight={700}
							>
								комфорт
							</Text>
							<Title
								lineHeight='40px'
								// pb='40px '
								fontSize={{ md: 34, base: 30 }}
								fontWeight={600}
								color='white'
							>
								1000 ₽
							</Title>
							<Flex
								flexDirection='column'
								gap={3}
							>
								{data.map((el, index) => (
									<Flex
										key={index}
										textAlign='start'
									>
										<Flex
											justifyContent='center'
											alignItems='center'
											gap={2}
										>
											<IoMdCheckmark fontSize={30} />
											<Text
												fontSize='14px'
												fontWeight={400}
											>
												{el.desc}
											</Text>
										</Flex>
									</Flex>
								))}
							</Flex>
						</Flex>

						<DefButton
							w='100%'
							h='44px'
							bg='#E3484F'
						>
							Начать
						</DefButton>
					</Flex>

					<Flex
						flexDirection='column'
						justifyContent='space-between'
						bg='#F4F4F5'
						color='black'
						w={{ md: 320, base: '100%' }}
						h='425px'
						p={6}
						borderRadius={20}
						textAlign='center'
					>
						<Flex
							flexDirection='column'
							gap={6}
						>
							<Flex
								textAlign='center'
								justifyContent='center'
								gap={1}
							>
								<FaCrown />
								<Text
									fontSize='12px'
									fontWeight='700'
									ml={1}
									letterSpacing={2}
								>
									VIP
								</Text>
							</Flex>
							<Title
								lineHeight='40px'
								// pb='40px '
								fontSize={{ md: 34, base: 30 }}
								fontWeight={600}
								color='black'
							>
								3000 ₽
							</Title>
							<Flex
								flexDirection='column'
								gap={3}
							>
								{data_vip.map((el, index) => (
									<Flex
										key={index}
										textAlign='start'
									>
										<Flex
											justifyContent='center'
											alignItems='center'
											gap={2}
										>
											<IoMdCheckmark fontSize={20} />
											<Text
												fontSize='14px'
												fontWeight={400}
											>
												{el.desc}
											</Text>
										</Flex>
									</Flex>
								))}
							</Flex>
						</Flex>

						<DefButton
							w='100%'
							h='44px'
							border='solid 1px black'
							bg='none'
							color='black'
						>
							Начать
						</DefButton>
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

export default Tariffs
