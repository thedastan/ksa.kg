import { Box, Button, Container, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'

import Description from '@/components/ui/texts/Description'
import Title from '@/components/ui/texts/Title'

import icon1 from '@/assets/img/addicon.png'
import icon3 from '@/assets/img/magicicon.png'
import icon2 from '@/assets/img/messageicon.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'
import TitleComponent from '@/components/ui/texts/TitleComponent'

const HowWork = () => {
	const data = [
		{
			url: icon1,
			title: 'Разместите заказ',
			desc: 'Зарегистрируйтесь на платформе и опишите свой заказ. Первый заказ — бесплатно!'
		},
		{
			url: icon2,
			title: 'Найдите производство',
			desc: 'Зарегистрируйтесь на платформе и опишите свой заказ. Первый заказ — бесплатно!'
		},
		{
			url: icon3,
			title: 'Получите результат',
			desc: 'Зарегистрируйтесь на платформе и опишите свой заказ. Первый заказ — бесплатно!'
		}
	]
	return (
		<Box p='150px 0'>
			<Container maxW={CONTAINER_WIDTH}>
        <Title lineHeight="40px" pb="40px " fontSize={{ md:42, base: 30 }} fontWeight={700}>Как это работает?</Title>

				<Flex
					flexWrap='wrap'
					gap={4}
				>
					{data.map((el, index) => (
						<Flex
							bg='#E4E7EC'
							w={{ md: 412, base: '100%' }}
							p={6}
							borderRadius={10}
							justifyContent='start'
							key={index}
							flexDirection='column'
							gap={3}
						>
							<Image
								width={80}
								height={80}
								src={el.url}
								alt='img'
							/>
							<Title
								w={250}
								pt={8}
								textAlign='start'
								lineHeight='36px'
								fontSize={32}
								fontWeight={400}
							>
								{el.title}
							</Title>
							<Description>{el.desc}</Description>

							<Button
								display='flex'
								justifyContent='start'
								alignItems='center'
								color='#3046BF'
								fontSize='14px'
								fontWeight='600'
								width='155px'
								height='17px' 
                bg="none"
								px={0} 
							>
								Создать заказ <GoArrowRight style={{ marginLeft: '8px' }} />
							</Button>
						</Flex>
					))}
				</Flex>
			</Container>
		</Box>
	)
}

export default HowWork
