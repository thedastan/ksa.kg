'use client'
import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

import img2 from '@/assets/img/gallery2.png'
import img3 from '@/assets/img/gallery3.png'
import img4 from '@/assets/img/gallery4.png'
import img5 from '@/assets/img/gallery5.png'
import img from '@/assets/img/gallery.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'
import Title from '../ui/texts/Title'
import TitleComponent from '../ui/texts/TitleComponent'
import { useGalleryData } from './press-center-details/gallery-data'
import { useRouter } from 'next/navigation'

const GalleryComponent = () => {
	const {data} = useGalleryData()
	const router = useRouter()
	return (
		<Box>
			<Container maxW={CONTAINER_WIDTH}>
				<Flex flexDir="column" gap={8}>
					{data.map((item, index) => (
						 <Box onClick={() => router.push(`/press-center/gallery/${item.id}`)}>
							<TitleComponent lineHeight="30px" pb={6} fontSize={20} fontWeight={600}>{item.title}</TitleComponent>
							<Flex
							key={index}
							gap={4}
							flexWrap='wrap'
						>
							{item.image1.map((el, index) => (
								<Box>
									<Box
										w={{ md: 324, base:  310 }}
										h={324}
										overflow='hidden'
										key={index}
									>
										<Image
											style={{
												width: '100%',
												height: '100%',
												objectFit: 'cover'
											}}
											src={el.img}
											alt='img'
										/>
									</Box>
									<Box></Box>
								</Box>
							))}

							<Flex
								gap={4}
								w={{ md: 324, base: 310 }}
								h={324}
								flexWrap='wrap'
							>
								{item.image2.map((el, index) => (
									<Box
										w={{ md: 150, base: 146 }}
										h={{ md: 150, base: 146 }}
										overflow='hidden'
										position='relative'
										borderRadius={4} // Needed for the overlay
									>
										<Image
											style={{
												width: '100%',
												height: '100%',
												objectFit: 'cover'
											}}
											src={el.img}
											alt='img'
										/>
										{/* Check if it's the last image, then add the overlay */}
										{index === item.image2.length - 1 && (
											<Box
												position='absolute'
												top='0'
												left='0'
												right='0'
												bottom='0'
												backgroundColor='rgba(0, 0, 0, 0.5)' // Semi-transparent black background
												display='flex'
												justifyContent='center'
												alignItems='center'
											>
												<Text
													color='white'
													fontSize='24px'
													fontWeight='bold'
												>
													+5
												</Text>
											</Box>
										)}
									</Box>
								))}
							</Flex>
						</Flex>
						 </Box>
					))}
				</Flex>
			</Container>
		</Box>
	)
}

export default GalleryComponent
