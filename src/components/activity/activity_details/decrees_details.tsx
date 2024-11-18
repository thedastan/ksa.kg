'use client'

import {
	Box,
	Button,
	Container,
	ListItem,
	OrderedList,
	Text,
	UnorderedList
} from '@chakra-ui/react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'
import { BsChevronLeft } from 'react-icons/bs'

import Description from '@/components/ui/texts/Description'
import Title from '@/components/ui/texts/Title'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { useDataDecrees } from './data-decrees'
import { useDataLaws } from './data-laws'

const Decrees_details = () => {
	const { id } = useParams()
	const { data_decrees } = useDataDecrees()
	let finds = data_decrees.find(el => el.id === +id)

	if (!finds) {
		return <Text>Item not found</Text>
	}

	return (
		<Box>
			<Link href={'/activity/decrees'}>
				<Text
					ml={-8}
					p={2}
					fontSize={20}
					position='absolute'
				>
					<BsChevronLeft />
				</Text>
			</Link>
			<Container maxW={CONTAINER_WIDTH}>
				<Box>
					<TitleComponent>{finds.title}</TitleComponent>
					<Title
						py={4}
						textAlign='start'
					>
						{finds.name}
					</Title>
					<Description>{finds.date}</Description>
					<Description>{finds.location}</Description>
					<Title
						mt={4}
						py={4}
						textAlign='start'
					>
						{finds.bold}
					</Title>

					{finds.description.map((item, index) => (
						<Box
							key={index}
							mb={1}
						>
							{item.desc && <Description>{item.desc}</Description>}

							{item.lists && (
								<UnorderedList
									pl={4}
									mt={2}
								>
									{item.lists.map((listItem, idx) => (
										<ListItem key={idx}>
											<Description>{listItem.list}</Description>
										</ListItem>
									))}
								</UnorderedList>
							)}
						</Box>
					))}
				</Box>
			</Container>
		</Box>
	)
}

export default Decrees_details
