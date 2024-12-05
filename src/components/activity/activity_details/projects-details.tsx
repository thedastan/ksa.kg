'use client'

import {
	Box,
	Container,
	Flex,
	ListItem,
	Text,
	UnorderedList
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { BsChevronLeft } from 'react-icons/bs'

import Description from '@/components/ui/texts/Description'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import img1 from '@/assets/img/icon1.png'
import img2 from '@/assets/img/icon2.png'
import img3 from '@/assets/img/icon3.png'
import img4 from '@/assets/img/icon4.png'
import img5 from '@/assets/img/icon5.png'
import img6 from '@/assets/img/icon6.png'
import img7 from '@/assets/img/icon7.png'
import img8 from '@/assets/img/icon8.png'
import img9 from '@/assets/img/icon9.png'
import img10 from '@/assets/img/icon10.png'
import img11 from '@/assets/img/icon11.png'
import img12 from '@/assets/img/icon12.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { useProjectsData } from './data-projects'

const ProjectsDetails = () => {
	const icons = [
		{
			icon: img1,
			title: 'Текстиль для спальной комнаты, столовой'
		},
		{
			icon: img2,
			title: 'Текстиль для ванных комнат'
		},
		{
			icon: img3,
			title: 'Декоративные и обычные ткани'
		},
		{
			icon: img4,
			title: 'Ковры и напольные покрытия'
		},
		{
			icon: img5,
			title: 'Умные ткани'
		},
		{
			icon: img6,
			title: 'Текстиль для HjReCa'
		},
		{
			icon: img7,
			title: 'Оформление окна'
		},
		{
			icon: img8,
			title: 'Декоративные интерьеры'
		},
		{
			icon: img9,
			title: 'Одежда для дома и отдыха'
		},
		{
			icon: img10,
			title: 'Сервировка стола'
		},
		{
			icon: img11,
			title: 'Ароматы для дома и офиса'
		},
		{
			icon: img12,
			title: 'Аксессуары'
		}
	]

	const { id } = useParams()
	const { data } = useProjectsData()
	let el = data.find(el => el.id === +id)

	if (!el) {
		return <Text>Item not found</Text>
	}

	return (
		<Box>
			<Link href={'/activity/projects'}>
				<Text
					ml={{ md: -8, base: -4 }}
					p={2}
					fontSize={20}
					position='absolute'
				>
					<BsChevronLeft />
				</Text>
			</Link>
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					flexDir='column'
					gap={6}
				>
					<TitleComponent fontSize={{ md: 34, base: 26 }} >{el.title}</TitleComponent>
					<Box
						w='100%'
						h={{ md: 276, base: 200 }}
						overflow='hidden'
					>
						<Image
							style={{ width: '100%', height: '100%', objectFit: 'cover' }}
							src={el.image}
							alt={el.title}
						/>	
					</Box>
					<Description
						fontSize={20}
						fontWeight={600}
					>
						{el.name}
					</Description>
					<Description>{el.desc}</Description>


					<TitleComponent fontSize={20} fontWeight={600}>Разделы выставки</TitleComponent>
					<Flex
						bg='#8e98997e'
						gap='1px'
						flexWrap='wrap'
						justifyContent="center"
						w={{ md: '668.5px', base: '309px' }}
					>
						{icons.map((el, index) => (
							<Flex
								bg='white'
								flexDir='column'
								alignItems='center'
								justifyContent='start'
								textAlign='center'
								key={index}
								w={{ md: 222, base: "154px" }}
								h={200}
							>
								<Box
									w={{ md: "80px", base: "70px" }}
									h={{ md: "80px", base: "70px" }}
									overflow='hidden'
									mt={6}
								>
									<Image
										style={{
											width: '100%',
											height: '100%',
											objectFit: 'cover'
										}}
										src={el.icon}
										alt={el.title}
									/>
								</Box>
								<Text
									mt={4}
									w='80%'
									fontSize={{ md:18, base: 14 }}
									fontWeight={400}
								>
									{el.title}
								</Text>
							</Flex>
						))}
					</Flex>

					<Flex
						flexDir='column'
						gap={4}
					>
						{el.admin.map((el, index) => (
							<Box key={index}>
								<Text
									fontSize={16}
									fontWeight={400}
								>
									Компания:{el.name}
								</Text>
								<Text
									fontSize={16}
									fontWeight={400}
								>
									Адрес:{el.location}
								</Text>
								<Text
									fontSize={16}
									fontWeight={400}
								>
									Телефон:{el.num}
								</Text>
								<Text
									fontSize={16}
									fontWeight={400}
								>
									Почта:{el.email}
								</Text>
								<Text
									fontSize={16}
									fontWeight={400}
								>
									Сайт:{el.site}
								</Text>
							</Box>
						))}
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

export default ProjectsDetails
