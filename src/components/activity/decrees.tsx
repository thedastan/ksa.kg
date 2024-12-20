'use client'

import { Box, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'

import Description from '../ui/texts/Description'
import Title from '../ui/texts/Title'
import TitleComponent from '../ui/texts/TitleComponent'

import { useDataDecrees } from './activity_details/data-decrees'

const DecreesComponet = () => {
	const { data_decrees } = useDataDecrees()
	const router = useRouter()
	return (
		<Flex
			flexDirection='column'
			gap={4}
		>
			<TitleComponent pb={4}>Документы</TitleComponent>
			{data_decrees.map((el, index) => (
				<Flex
					flexDirection='column'
					justifyContent='space-between'
					key={index}
					onClick={() => router.push(`/activity/decrees/${el.id}`)}
					w='100%'
					h={{ md: '147px', base: '100%' }}
					bg='#F7F7F7'
					p={5}
					borderRadius={10}
				>
					<Title
						lineHeight='30px'
						textAlign='start'
						pb={{ md: 4, base: 4 }}
					>
						{el.title}
					</Title>
					<hr />
					<Flex justifyContent='space-between' mt={{ md: 2, base: 4 }}>
						<Text color="gray.600" fontSize={14} fontWeight={400}>Дата публикации: {el.date_public}</Text>
						<Text color="#3046BF" fontSize={14} fontWeight={400}>Скачать PDF</Text>
					</Flex>
				</Flex>
			))}
		</Flex>
	)
}

export default DecreesComponet
