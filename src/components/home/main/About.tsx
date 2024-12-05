import { Box, Button, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { IoArrowUpSharp } from 'react-icons/io5'

import DefButton from '@/components/ui/buttons/DefButton'
import Description from '@/components/ui/texts/Description'
import Title from '@/components/ui/texts/Title'

import img1 from '@/assets/img/dress.png'
import img2 from '@/assets/img/dresscar.png'
import img3 from '@/assets/img/textile.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const About = () => {
	const data = [
		{
			num: '70',
			sum: '%',
			desc: 'Семей в швейной отрасли имеют хотя бы одного члена, работающего в этой отрасли.'
		},
		{
			num: '50',
			sum: 'k',
			desc: 'Рабочих, большинство из которых - женщины.'
		},
		{
			num: '1млрд',
			sum: '+',
			desc: 'Оборот швейной отрасли составляет более 1 миллиарда долларов в год.'
		},
		{
			num: '20',
			sum: '%',
			desc: 'Рост капитала в текущем году блогодаря инвестициям и развитию отрасли'
		}
	]
	return (
		<Box p='100px 0'>
			<Container maxW={CONTAINER_WIDTH}>
				<Box
					display='flex'
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
					w='100%'
				>
					<Flex
						w='100%'
						maxW={1000}
						justifyContent='center'
						flexDirection={{ md: 'row', base: 'column' }}
						gap={20}
						alignItems='center'
						bg='#EFEFEF'
						borderRadius={10}
						p={{ md: '5px 20px', base: '40px 0px' }}
						_hover={{ bg: '#E4E7FF' }}
					>
						<Flex
							justifyContent='center'
							alignItems='center'
							flexDirection='column'
							gap={6}
						>
							<Title
								fontSize={{ md: 42, base: 30 }}
								fontWeight={700}
							>
								О нас
							</Title>
							<Description
								lineHeight='26px'
								w={{ md: 435, base: '100%' }}
								textAlign='center'
								fontSize={16}
							>
								Мы готовы брать на себя роль лидера в формировании инновационной
								среды для швейной промышленности Кыргызстана.
							</Description>
							<DefButton
								w={250}
								h='40px'
								fontSize={16}
								fontWeight={600}
								bg='#3046BF'
							>
								Присоединиться
							</DefButton>
						</Flex>
						<Box ml={{ md: '0', base: '-30px' }}>
							<Image
								width={250}
								height={400}
								src={img1}
								alt='img'
							/>
						</Box>
					</Flex>

					<Flex
						flexDirection={{ md: 'row', base: 'column' }}
						justifyContent='space-between'
						gap={4}
						mt={4}
					>
						<Flex
							borderRadius={10}
							flexDirection='column'
							justifyContent='center'
							alignItems='center'
							textAlign='center'
							w={{ md: '491px', base: '100%' }}
							h='100%'
							bg='#EFEFEF'
							p={{ md: 10, base: '20px 10px' }}
							_hover={{ bg: '#E4E7FF' }}
						>
							<Title
								fontSize={{ md: 42, base: 30 }}
								fontWeight={700}
							>
								Цели
							</Title>
							<Description
								mt={6}
								lineHeight='26px'
								w={{ md: 435, base: '100%' }}
								textAlign='center'
								fontSize={16}
							>
								Мы стремимся к тому, чтобы наш голос стал слышным и уважаемым не
								только на региональном, но и на глобальном уровне.
							</Description>
							<Image
								style={{ width: '320px', height: '100%' }}
								src={img2}
								alt=''
							/>
						</Flex>

						<Flex
							borderRadius={10}
							flexDirection='column'
							justifyContent='center'
							alignItems='center'
							textAlign='center'
							w={{ md: '491px', base: '100%' }}
							h='100%'
							bg='#EFEFEF'
							p='0 10px'
							_hover={{ bg: '#E4E7FF' }}
						>
							<Title
								mt='45px'
								fontSize={{ md: 42, base: 30 }}
								fontWeight={700}
							>
								Миссия
							</Title>
							<Description
								lineHeight='26px'
								w={{ md: 435, base: '100%' }}
								textAlign='center'
								fontSize={16}
								mt={6}
							>
								Наша миссия заключается в укреплении позиций кыргызских швейных
								предприятий на международном рынке.
							</Description>
							<Image
								style={{ width: '320px', height: '100%' }}
								src={img3}
								alt=''
							/>
						</Flex>
					</Flex>
				</Box>

				<Flex
					justifyContent={{ md: 'center', base: 'start' }}
					flexWrap='wrap'
					pt='80px'
					gap={6}
				>
					 

					 {data.map((el,index) => (
						<Flex key={index} gap={4}>
							<Box
						display={{ md: 'flex', base: 'none' }}
						mt={2}
						w='1px'
						h='140px'
						bg='#EDE8E6'
					/>

					<Box>
						<Flex alignItems='start'>
							<Text
								fontSize={{ md: 57, base: 40 }}
								fontWeight={500}
							>
								{el.num}
							</Text>
							<Text
								fontSize={{ md: 35, base: 25 }}
								fontWeight={400}
							>
								{el.sum}
							</Text>
							<Text
								fontSize={20}
								mt={4}
								bg='#EDE8E6'
								p={1}
								borderRadius='50%'
							>
								<IoArrowUpSharp />
							</Text>
						</Flex>
						<Text
							lineHeight='23px'
							fontSize={14}
							fontWeight={400}
							w={280}
						>
							 {el.desc}
						</Text>
					</Box>

						</Flex>

					 ))}
					 

					 
				</Flex>
			</Container>
		</Box>
	)
}

export default About
