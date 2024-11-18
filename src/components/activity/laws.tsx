'use client'

import { Box, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'

import Description from '../ui/texts/Description'
import Title from '../ui/texts/Title'
import TitleComponent from '../ui/texts/TitleComponent'

import { useDataLaws } from './activity_details/data-laws'

const LawsComponent = () => {
	const { data_laws } = useDataLaws()
	const router = useRouter()
	return (
		<Flex
			flexDirection='column'
			gap={4}
		>
			<TitleComponent pb={4}>Документы</TitleComponent>
			{data_laws.map((el, index) => (
				<Flex
					flexDirection='column'
					justifyContent='space-between'
					key={index}
					onClick={() => router.push(`/activity/laws/${el.id}`)}
					w='100%'
					h='147px'
					bg='#F7F7F7'
					p={5}
					borderRadius={10}
				>
					<Title
						lineHeight='30px'
						textAlign='start'
					>
						{el.title}
					</Title>
					<hr />
					<Flex justifyContent='space-between'>
						<Text
							color='gray.600'
							fontSize={14}
							fontWeight={400}
						>
							Дата публикации: {el.date_public}
						</Text>
						<Text
							color='#3046BF'
							fontSize={14}
							fontWeight={400}
						>
							Скачать PDF
						</Text>
					</Flex>
				</Flex>
			))}
		</Flex>
	)
}

export default LawsComponent
