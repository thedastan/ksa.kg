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
import React from 'react'
import { BsChevronLeft } from 'react-icons/bs'

import Description from '@/components/ui/texts/Description'
import Title from '@/components/ui/texts/Title'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { useGalleryData } from './gallery-data'

const GalleryDetail = () => {
	const { id } = useParams()
	const { data } = useGalleryData()
	let finds = data.find(el => el.id === +id)

	if (!finds) {
		return <Text>Item not found</Text>
	}

	return (
		<Box>
			<Link href={'/press-center/gallery'}>
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
				<Box>
					<TitleComponent lineHeight={{ md: "39px", base: "30px" }} fontSize={{ md: 34, base: 26 }}>
						{finds.title}
					</TitleComponent>

					<Flex
						mt={6}
						gap={4}
						flexWrap='wrap'
					>
						{finds.image1.map((el, index) => (
							<Box
								key={index}
								w={{ md: 210, base: '100%' }}
								h={{ md: 210, base: '100%' }}
								overflow='hidden'
								borderRadius={8}
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
						))}
            {finds.image2.map((el, index) => (
							<Box
								key={index}
								w={{ md: 210, base: '100%' }}
								h={{ md: 210, base: '100%' }}
								overflow='hidden'
								borderRadius={8}
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
						))}
					</Flex>
				</Box>
			</Container>
		</Box>
	)
}

export default GalleryDetail
