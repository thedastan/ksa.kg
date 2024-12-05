import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

import img1 from '@/assets/img/fon1.png'
import img2 from '@/assets/img/image 832.png'
import img4 from '@/assets/img/project-img1.png'
import img3 from '@/assets/img/project-img4.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import Title from '../ui/texts/Title'
import TitleComponent from '../ui/texts/TitleComponent'

const NewsComponent = () => {
	const data = [
		{
			url: img1,
			desc: 'Фабрика классической одежды открывает новые вакансии',
			date: 'Авг 22 , 2022'
		},

		{
			url: img2,
			desc: 'Выставка молодых дизайнеров Кыргызстана пройдет в Бишкеке...',
			date: 'Авг 22 , 2022'
		},

		{
			url: img3,
			desc: 'Выставка молодых дизайнеров Кыргызстана пройдет в Бишкеке...',
			date: 'Авг 22 , 2022'
		},
		{
			url: img4,
			desc: 'Выставка молодых дизайнеров Кыргызстана пройдет в Бишкеке...',
			date: 'Авг 22 , 2022'
		},
    {
			url: img3,
			desc: 'Выставка молодых дизайнеров Кыргызстана пройдет в Бишкеке...',
			date: 'Авг 22 , 2022'
		},
		{
			url: img4,
			desc: 'Выставка молодых дизайнеров Кыргызстана пройдет в Бишкеке...',
			date: 'Авг 22 , 2022'
		}
	]

	return (
		<Box>
			<Container maxW={CONTAINER_WIDTH}>
      <TitleComponent fontSize={{ md: 34, base: 28 }} pb={8}>Новости текстильной и легкой промышленности</TitleComponent>
				<Flex flexWrap="wrap" gap={2}>
					{data.map((el, index) => (
						<Box cursor="pointer" key={index} borderRadius={12} bg="#F7F7F7" w={330} p={3}>
							<Box
								w={{ md: '100%', base: '100%' }}
								h={129}
								borderRadius={8}
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
							<Title mt={3} fontSize={16} fontWeight={500} lineHeight="19px" textAlign="start">{el.desc}</Title>
							<Flex justifyContent="end" w="100%" textAlign="end">
								<Text
                mt={3}
                textAlign="end"
									color='#a5a5a5'
									fontSize={12}
									fontWeight={400}
								>
									{el.date}
								</Text>
							</Flex>
						</Box>
					))}
				</Flex>
			</Container>
		</Box>
	)
}

export default NewsComponent
