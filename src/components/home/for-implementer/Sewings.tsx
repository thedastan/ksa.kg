import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { FaCrown } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { IoLocationOutline } from 'react-icons/io5'

import DefButton from '@/components/ui/buttons/DefButton'
import Description from '@/components/ui/texts/Description'
import Title from '@/components/ui/texts/Title'

import img from '@/assets/img/companyname.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const data = [
	{
		url: img,
		title: 'Сейтек Фабрик',
		desc: 'Наша фабрика входит в Топ 10 лучших производителей в стране',
		phone: '+996 567 789 678',
		location: 'Кыргызстан/Бишкек, ул.Буденного, 134/2',
		star: '0.0 / 5 ⭐⭐⭐⭐⭐'
	},
	{
		url: img,
		title: 'Сейтек Фабрик',
		desc: 'Наша фабрика входит в Топ 10 лучших производителей в стране',
		phone: '+996 567 789 678',
		location: 'Кыргызстан/Бишкек, ул.Буденного, 134/2',
		star: '0.0 / 5 ⭐⭐⭐⭐⭐'
	},
	{
		url: img,
		title: 'Сейтек Фабрик',
		desc: 'Наша фабрика входит в Топ 10 лучших производителей в стране',
		phone: '+996 567 789 678',
		location: 'Кыргызстан/Бишкек, ул.Буденного, 134/2',
		star: '0.0 / 5 ⭐⭐⭐⭐⭐'
	},
	{
		url: img,
		title: 'Сейтек Фабрик',
		desc: 'Наша фабрика входит в Топ 10 лучших производителей в стране',
		phone: '+996 567 789 678',
		location: 'Кыргызстан/Бишкек, ул.Буденного, 134/2',
		star: '0.0 / 5 ⭐⭐⭐⭐⭐'
	}
]

const Sewings = () => {
	return (
		<Box pb="100px">
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					justifyContent='center'
					alignItems='center'
          flexDirection="column"
				>
					<Title lineHeight="40px" pb="40px " fontSize={{ md:42, base: 30 }} fontWeight={700}>Швейные производства</Title>

					<Flex
						flexDirection='column'
						gap={6}
						w='100%'
						maxW={1000}
					>
						{data.map((el, index) => (
							<Flex
								key={index}
								justifyContent='center'
                flexDirection={{ md: "row", base: "column" }}
								alignItems={{ md: "start", base: "center" }}
								p='15px'
								bg='#FFFDF4'
								borderRadius={10}
								border='solid 1px #FFC100'
								gap={8}
							>
								<Box
									w='160px'
									h='160px'
								>
									<Image
										style={{
											width: '100%',
											height: '100%',
											borderRadius: '50%'
										}}
										src={el.url}
										alt='img'
									/>
								</Box>
								<Flex
									w={{ md:"80%", base: '100%' }}
									minH={130}
									h='100%'
									mt={4}
									alignItems='center'
                  flexDirection={{ md:"row", base: "column" }}
									justifyContent='space-between'
								>
									<Flex
										flexDirection='column'
										textAlign='start'
									>
										<Title
											fontSize={22}
											fontWeight={600}
											textAlign='start'
										>
											{el.title}
										</Title>
										<Description
											w={{ md: 450, base: '100%' }}
											fontSize={14}
										>
											{el.desc}
										</Description>

										<Flex
											align='center'
											mt={4}
											color='#6262627e'
										>
											<FiPhone />
											<Text
												fontSize={14}
												fontWeight={400}
												ml={2}
											>
												{el.phone}
											</Text>
										</Flex>
										<Flex
											align='center'
											mt={1}
											color='#6262627e'
										>
											<IoLocationOutline />
											<Text
												fontSize={14}
												fontWeight={400}
												ml={2}
											>
												{el.location}
											</Text>
										</Flex>
									</Flex>
									<Flex
										flexDirection={{ md: "column", base: "row-reverse" }}
										alignItems='end'
										justifyContent='space-between'
										minH={{ md: 113, base: '100%' }}
                    pt={{ md: 0, base: 10 }}
										h='100%'
                    w="100%"
									>
										<Text
											fontSize={20}
											fontWeight={600}
										>
											<FaCrown />
										</Text>
										<Text
											fontSize={16}
											fontWeight={600}
										>
											{el.star}
										</Text>
									</Flex>
								</Flex>
							</Flex>
						))}
					</Flex>

					<DefButton
          mt={10}
          w={{ md: 350, base:"100%" }}
						fontSize={16}
						fontWeight={600}
						bg='#E3484F'
					>
						Каталог компаний
					</DefButton>
				</Flex>
			</Container>
		</Box>
	)
}

export default Sewings
