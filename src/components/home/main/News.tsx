import { Box, Button, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

import Description from '@/components/ui/texts/Description'
import Title from '@/components/ui/texts/Title'

import img from '@/assets/img/image 832.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const data = [
	{
		url: img,
		desc: 'Закон Кыргызской Республики №YY "О государственной поддержке малого и среднего предпринимательства"',
		date: 'Авг 22 , 2022'
	},

	{
		url: img,
		desc: 'Закон Кыргызской Республики №YY "О государственной поддержке малого и среднего предпринимательства"',
		date: 'Авг 22 , 2022'
	},

	{
		url: img,
		desc: 'Закон Кыргызской Республики №YY "О государственной поддержке малого и среднего предпринимательства"',
		date: 'Авг 22 , 2022'
	}
]
const News = () => {
	return (
		<Box>
			<Container maxW={CONTAINER_WIDTH}>
				<Box>
					<Flex
						justifyContent='space-between'
						alignItems='center'
						paddingBottom={6}
					>
						<Title fontSize={{ md: 42, base: 40 }}>Объявления</Title>
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
								<Flex key={index}
									w={700}
									h={{ md: 200, base: '100%' }}
									bg='#F7F7F7'
									justifyContent='space-between'
									flexDirection={{ md: 'row', base: 'column' }}
									alignItems='center'
									borderRadius={10}
									p={4}
									gap={4}
								>
									<Box
										w='330px'
										h={180}
										borderRadius={10}
										overflow='hidden'
									>
										<Image
											style={{
												objectFit: 'cover',
												width: '100%',
												height: '100%'
											}}
											src={el.url}
											alt='img'
										/>
									</Box>
									<Flex
										w={320}
										h='100%'
										flexDirection='column'
										justifyContent='space-between'
									>
										<Description
											fontSize={16}
											lineHeight='22px'
											fontWeight={500}
											pt={{ md: '0', base: '10px' }}
											pb={{ md: "0", base: '20px' }}

										>
											{el.desc}
										</Description>

										<Flex
											justifyContent='space-between'
											alignItems='center'
											borderTop='1.2px solid #c2c2c2'
											pt={2}
										>
											<Text
												color='#a5a5a5'
												fontSize={12}
												fontWeight={400}
											>
												{el.date}
											</Text>
											<Link
												style={{
													color: '#3046BF',
													fontSize: '14px',
													fontWeight: '400'
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

export default News
