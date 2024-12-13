import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

import CompanyImage from '@/assets/img/companyname.png'

import { PUBLIC_PAGES } from '@/config/pages/public-url.config'

import CategoryItem from '../elements/category-item'

const CategoryCard = () => {
	return (
		<Link href={PUBLIC_PAGES.SUBCATEGORY('shveinaya-fabrica')}>
			<Flex
				bg='#F7F7F7'
				rounded='20px'
				padding='5'
				justifyContent='space-between'
				flexDirection={{ xl: 'row', base: 'column' }}
				gap='5'
			>
				<Box
					minW='160px'
					h='160px'
					rounded='12px'
					overflow='hidden'
				>
					<Image
						src={CompanyImage}
						alt='Image'
						className='full-image'
					/>
				</Box>
				<Box pt='6px'>
					<Flex
						fontWeight='600'
						lineHeight='14.52px'
						fontSize='12px'
						color='#12141D'
						alignItems='center'
						gap='3'
					>
						<Text
							lineHeight='28px'
							fontSize='22px'
							color='#202223'
						>
							Швейная фабрика
						</Text>
						<Text fontWeight='400'>/</Text>
						<Text>300 Компаний</Text>
						<Text fontWeight='400'>/</Text>
						<Text>23 Подкатегорий</Text>
					</Flex>
					<Flex
						mt='19px'
						flexWrap='wrap'
						gap='2'
					>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
							el => (
								<CategoryItem key={el}>Мужские изделия</CategoryItem>
							)
						)}
					</Flex>
				</Box>
			</Flex>
		</Link>
	)
}

export default CategoryCard
