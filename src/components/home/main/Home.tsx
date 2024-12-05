'use client'

import { Box, Button, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import DefButton from '@/components/ui/buttons/DefButton'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import SliderCard1 from './slider/SliderCard1'
import SliderCard2 from './slider/SliderCard2'
import SliderCard3 from './slider/SliderCard3'

const Home = () => {
	const sliderRef = useRef<Slider | null>(null)

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	}

	return (
		<Box>
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					pb={14}
					justifyContent='center'
					textAlign='center'
				>
					<Text
						fontSize={{ md: '42px', base: '26px' }}
						width={{ md: '1000px', base: '100%' }}
						lineHeight={{ md: '50px', base: '35px' }}
						color='#3046BF'
						fontWeight={700}
						pt={20}
					>
						<Text
							as='span'
							fontSize={{ md: '42px', base: '22px' }}
							color='#E3484F'
						>
							АССОЦИАЦИЯ КЫРГЫЗСКИХ ШВЕЙНИКОВ
						</Text>{' '}
						- каталог, объединяющий всех участников легкой промышленности
					</Text>
				</Flex>
				<Box>
					<Box display={{ md: "flex", base:"none" }}
						justifyContent='space-between'
						alignItems='center'
						position='relative'
						flexDirection='row-reverse'
						mt='20px'
					>
						<Button
							position='absolute'
							w={10}
							h={10}
							zIndex={1}
              right={-4}
              mt="40%"
              borderRadius={10}
               bg="white"
              border="solid 1px #c9c9c9"
							onClick={() => sliderRef.current?.slickNext()}
						>
							<FaChevronRight />
						</Button>
						<Button
							w={10}
							h={10}
							zIndex={1}
							position='absolute'
              left={-4}
              mt="40%"
              bg="white"
              border="solid 1px #c9c9c9"
							onClick={() => sliderRef.current?.slickPrev()}
						>
							<FaChevronLeft />
						</Button>
					</Box>
					<Box
						display={{ md: "flex", base:"none" }}
						justifyContent='space-between'
						gap={20}
						flexDirection='column'
           
					>
						<Slider
							ref={sliderRef}
							{...settings}
						>
							{/* <SliderCard1 /> */}
							<SliderCard2 />
							<SliderCard3 />
						</Slider>
					</Box>

					<Box display={{ md: "none", base:"block" }}>
					<SliderCard2 />
					<SliderCard3 />
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default Home
