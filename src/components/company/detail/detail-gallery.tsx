import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

import CompanyImage from '@/assets/img/cardhome.png'

import Fancybox from './fancybox'

const DetailCompanyGallery = () => {
	return (
		<>
			<Box
				h='355px'
				w='100%'
				rounded='13.5px'
				overflow='hidden'
				position='relative'
				border='1.13px solid #0000001F'
			>
				<Image
					src={CompanyImage}
					alt='Image'
					className='full-image'
				/>
				<Flex
					position='absolute'
					bottom='0'
					left='0'
					w='100%'
					h='70px'
					bg='linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(8, 8, 8, 0) 100%)'
					zIndex='2'
					px='6'
					py='5'
					alignItems='end'
				>
					<Text
						color='#FFFFFF'
						fontSize='12px'
						lineHeight='15.6px'
						fontWeight='400'
					>
						Пошив любых видов изделий
					</Text>
				</Flex>
			</Box>

			<Flex
				mt='18px'
				w='100%'
				overflowX='auto'
				className='unscroll'
			>
				<Flex gap='5.21px'>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(el => (
						<Box
							key={el}
							rounded='7.55px'
							w='75.5px'
							h='75.5px'
							border='1.43px solid #E4E7EC'
							overflow='hidden'
						>
							<Image
								src={CompanyImage}
								alt='Image'
								className='full-image'
							/>
						</Box>
					))}
				</Flex>
			</Flex>
		</>
	)
}

export default DetailCompanyGallery
