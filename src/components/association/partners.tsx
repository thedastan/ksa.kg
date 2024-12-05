import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import img from '@/assets/img/companyname.png'

import Title from '../ui/texts/Title'
import TitleComponent from '../ui/texts/TitleComponent'

const data = [
	{
		image: img,
		title: 'Общественная палата Российской Федерации',
		link: 'https://motionweb.kg/'
	},
	{
		image: img,
		title: 'Общественная палата Российской Федерации',
		link: 'https://motionweb.kg/'
	},
	{
		image: img,
		title: 'Общественная палата Российской Федерации',
		link: 'https://motionweb.kg/'
	},
	{
		image: img,
		title: 'Общественная палата Российской Федерации',
		link: 'https://motionweb.kg/'
	}
]

const PartnersComponent = () => {
	return (
		<Box pb={34}>
			<TitleComponent fontSize={{ md: 34, base: 26 }}>
      Партнёры Ассоциации швейной и лёгкой промышленности Кыргызстана
			</TitleComponent>

			<Flex mt={8} flexDirection="column" gap={3}>
				{data.map((el, index) => (
					<Flex
						key={index}
						w='100%'
						bg='#F7F7F7'
						borderRadius={10}
						p={4}
						gap={4}
					>
						<Box
							borderRadius='50%'
							w='58px'
							h='58px'
							overflow='hidden'
						>
							<Image
								style={{ width: '100%', height: '100%', objectFit: 'cover' }}
								src={el.image}
								alt=''
							/>
						</Box>
						<Box w="80%">
							<Title
								fontSize={16}
								fontWeight={500}
								textAlign="start"
							>
								{el.title}
							</Title>
							<Link
								style={{ color: '#3046BF' }}
								href={el.link}
							>
								{el.link}
							</Link>
						</Box>
					</Flex>
				))}
			</Flex>
		</Box>
	)
}

export default PartnersComponent
