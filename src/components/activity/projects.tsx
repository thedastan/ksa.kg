'use client'

import { Box, Container, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import Title from '../ui/texts/Title'
import TitleComponent from '../ui/texts/TitleComponent'

import { useProjectsData } from './activity_details/data-projects'

const ProjectsComponent = () => {
	const { data } = useProjectsData()
	const router = useRouter()
	return (
		<Box>
			<Container maxW={CONTAINER_WIDTH}>
				<Box>
					<TitleComponent fontSize={{ md: 34, base: 26 }} pb={8}>Проекты</TitleComponent>
					<Flex
						flexWrap='wrap'
						gap={10}
					>
						{data.slice(0, 4).map((el, index) => (
							<Flex
								flexDir='column'
								alignItems='start'
								gap={4}
								key={index}
							>
								<Box
									onClick={() => router.push(`/activity/projects/${el.id}`)}
									w={{ md: 314, base: '100%' }}
									h={180}
									borderRadius={8}
									overflow='hidden'
								>
									<Image
										style={{
											width: '100%',
											height: '100%',
											objectFit: 'cover'
										}}
										src={el.image}
										alt={el.title}
									/>
								</Box>
								<Title
									fontSize={16}
									fontWeight={600}
								>
									{el.title}
								</Title>
							</Flex>
						))}

						{data.slice(4, 5).map((el, index) => (
							<Flex
								flexDir='column'
								alignItems='start'
								gap={4}
								key={index}
							>
								<Box
									onClick={() => router.push(`/activity/laws/${el.id}`)}
									w={{ md: "100%", base: '100%' }}
									h={{ md: 276, base: 180 }}
									borderRadius={8}
									overflow='hidden'
								>
									<Image
										style={{
											width: '100%',
											height: '100%',
											objectFit: 'cover'
										}}
										src={el.image}
										alt={el.title}
									/>
								</Box>
								<Title
									fontSize={16}
									fontWeight={600}
								>
									{el.title}
								</Title>
							</Flex>
						))}
					</Flex>
				</Box>
			</Container>
		</Box>
	)
}

export default ProjectsComponent
