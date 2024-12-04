import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { FiEdit } from 'react-icons/fi'
import { GrLocation } from 'react-icons/gr'
import { LuEye, LuPhone, LuTrash2 } from 'react-icons/lu'
import { TiStar } from 'react-icons/ti'

import CompanyImage from '@/assets/img/companyname.png'

const CompanyCard = () => {
	return (
		<Flex
			bg='#F7F7F7'
			rounded='20px'
			padding='5'
			justifyContent='space-between'
		>
			<Flex
				alignItems='center'
				gap='40px'
			>
				<Box
					w='160px'
					h='160px'
					rounded='50%'
					overflow='hidden'
				>
					<Image
						src={CompanyImage}
						alt='Image'
						className='full-image'
					/>
				</Box>
				<Box>
					<Text
						fontWeight='600'
						lineHeight='28px'
						fontSize='22px'
						color='#202223'
						textTransform='uppercase'
					>
						LILIYA
					</Text>
					<Text
						mt='10px'
						fontWeight='400'
						lineHeight='18px'
						fontSize='14px'
						color='#1C1B1F'
					>
						Наша фабрика входит в Топ 10 лучших производителей в стране
					</Text>
					<Box
						mt='5'
						fontWeight='400'
						lineHeight='20px'
						fontSize='14px'
						color='#12141D'
						opacity='.8'
					>
						<Flex gap='2'>
							<LuPhone />
							<Text>+996 567 789 678</Text>
						</Flex>
						<Flex
							mt='10px'
							gap='2'
						>
							<GrLocation />
							<Text>Кыргызстан/Бишкек, ул.Буденного, 134/2</Text>
						</Flex>
					</Box>
				</Box>
			</Flex>

			<Flex
				flexDirection='column'
				alignItems='end'
				justifyContent='space-between'
				pr='10px'
			>
				<Flex
					bg='#FFFFFF'
					rounded='6px'
					gap='3'
					px='2'
					py='5px'
				>
					<LuTrash2 />
					<Box
						h='100%'
						w='1px'
						bg='#000000'
						opacity='.2'
					/>
					<FiEdit />
					<Box
						h='100%'
						w='1px'
						bg='#000000'
						opacity='.2'
					/>
					<LuEye />
				</Flex>

				<Flex
					gap='2'
					alignItems='center'
				>
					<Text
						fontWeight='600'
						fontSize='14px'
						lineHeight='32px'
						color='#12141D'
						letterSpacing='-0.5px'
					>
						0.0 / 5
					</Text>
					<Flex>
						{[1, 2, 3, 4, 5].map(star => (
							<TiStar
								key={star}
								color='#FFC947'
								fontSize='18px'
							/>
						))}
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default CompanyCard
