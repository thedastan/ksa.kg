'use client'
import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Link, { useRouter } from 'next/navigation'
import React from 'react'
 

import Title from '../ui/texts/Title'
import TitleComponent from '../ui/texts/TitleComponent'
import Description from '../ui/texts/Description'
import { usePublicationsData } from './press-center-details/publications-data'
 

const PublicationsComponent = () => {
  const router = useRouter()
  const { data } = usePublicationsData()
  
	return (
		<Box pb={34}>
			<TitleComponent fontSize={{ md: 34, base: 26 }}>
				Партнёры Ассоциации швейной и лёгкой промышленности Кыргызстана
			</TitleComponent>

			<Flex
				mt={8}
				flexDirection='column'
				gap={3}
			>
				{data.map((el, index) => (
					<Flex
						key={index}
            onClick={() => router.push(`/press-center/publications/${el.id}`)}
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
								src={el.img}
								alt=''
							/>
						</Box>
						<Box w='80%'>
							<Title
								fontSize={16}
								fontWeight={500}
								textAlign='start'
                lineHeight="19px"
							>
								{el.title}
							</Title>

              <Description color="#12141D" fontSize={12} fontWeight={400}>{el.data}</Description>
							 
							 
						 
						</Box>
					</Flex>
				))}
			</Flex>
		</Box>
	)
}

export default PublicationsComponent
