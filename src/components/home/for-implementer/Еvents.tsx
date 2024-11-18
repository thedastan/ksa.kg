import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

import Description from '@/components/ui/texts/Description'
import Title from '@/components/ui/texts/Title'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const data = [
	{
		title: 'Выставка “Меркурий”',
		date: 'Сен 27 , 2024',
		day: 'Четверг, 19:00'
	},

	{
		title: 'Выставка “Меркурий”',
		date: 'Сен 27 , 2024',
		day: 'Четверг, 19:00'
	},

	{
		title: 'Выставка “Меркурий”',
		date: 'Сен 27 , 2024',
		day: 'Четверг, 19:00'
	}
]

const Еvents = () => {
	return (
		<Box>
			<Container maxW={CONTAINER_WIDTH}>
				<Box>
					<Flex
						justifyContent='space-between'
						alignItems='center'
						paddingBottom={6}
					>
						<Title lineHeight="48px" fontSize={{ md: 42, base: 40 }}>Календарь мероприятий</Title>
						<Text
							fontSize={30}
							color='#3046BF'
						>
							<BsArrowRight />
						</Text>
					</Flex>

					<Box>
						<Flex
							gap={4}
							overflowX='scroll'
							paddingTop={6}
							borderTop='1px solid #E6E6E6'
							className='home_news'
						>
							{data.map((el, index) => (
								<Flex
									key={index}
									w={420}
									// h={{ md: 200, base: '100%' }}
									bg='#F7F7F7'
									justifyContent='space-between'
									flexDirection={{ md: 'row', base: 'column' }}
									alignItems='center'
									borderRadius={10}
									p={{ md: "40px 25px", base: "30px 20px" }}
                  border='1px solid #E6E6E6'
									gap={4}
								>
									 
									<Flex
										w={{ md: '100%', base: 300 }}
										h='100%'
										flexDirection='column'
										justifyContent='space-between'
									>
										<Description
											fontSize={16}
											lineHeight='22px'
											fontWeight={500}
											pt={{ md: '0', base: '10px' }}
											pb={{ md: '0', base: '20px' }}
										>
											{el.title}
										</Description>

										<Flex
											justifyContent='space-between'
											alignItems={{ md: 'center', base: 'start' }}
                      flexDirection={{ md: 'row', base: "column" }}
											pt={5}
										>
											<Flex gap={2} pb={{ md: '0', base: 2 }}>
												<Text
													color='#a5a5a5'
													fontSize={12}
													fontWeight={400}
												>
													{el.date}
												</Text>
												<Box
													w='1px'
													h={4}
													bg='#a5a5a5'
												/>
												<Text
													color='#a5a5a5'
													fontSize={12}
													fontWeight={400}
												>
													{el.day}
												</Text>
											</Flex>
											<Link
												style={{
													color: '#3046BF',
													fontSize: '14px',
													fontWeight: '600'
												}}
												href='/'
											>
												Подробнее &gt;
											</Link>
										</Flex>
									</Flex>
								</Flex>
							))}
						</Flex>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default Еvents
