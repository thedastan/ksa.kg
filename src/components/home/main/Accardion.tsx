'use client'

import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Container,
	Flex,
	Text
} from '@chakra-ui/react'
import Image from 'next/image'
import { AiOutlinePlus } from 'react-icons/ai'
import { HiOutlineMinus } from 'react-icons/hi'

import Title from '@/components/ui/texts/Title'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import { inter } from '@/constants/fonts/fonts'

import img from '@/assets/img/image 832.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const data = [
	{
		index: 0,
		title: 'Импортеры товаров',
		description:
			'Компании, которые занимаются поставками материалов и оборудования из Китая для швейных производств. ',
		image: img
	},

	{
		index: 1,
		title: 'Импортеры товаров',
		description:
			'Компании, которые занимаются поставками материалов и оборудования из Китая для швейных производств. ',
		image: img
	},

	{
		index: 2,
		title: 'Импортеры товаров',
		description:
			'Компании, которые занимаются поставками материалов и оборудования из Китая для швейных производств. ',
		image: img
	},

	{
		index: 3,
		title: 'Импортеры товаров',
		description:
			'Компании, которые занимаются поставками материалов и оборудования из Китая для швейных производств. ',
		image: img
	},

	{
		index: 4,
		title: 'Импортеры товаров',
		description:
			'Компании, которые занимаются поставками материалов и оборудования из Китая для швейных производств. ',
		image: img
	},

	{
		index: 5,
		title: 'Импортеры товаров',
		description:
			'Компании, которые занимаются поставками материалов и оборудования из Китая для швейных производств. ',
		image: img
	},

	{
		index: 8,
		title: 'Импортеры товаров',
		description:
			'Компании, которые занимаются поставками материалов и оборудования из Китая для швейных производств. ',
		image: img
	}
]

const AccordionComponent = () => {
	return (
		<Box p="50px 0">
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					pb={14}
					justifyContent='center'
					textAlign='center'
				>
					<Text
						fontSize={{ md: "42px", base: '30px' }}
						width={{ md: "650px", base: '100%' }}
						lineHeight='50px'
						color='#3046BF'
            fontWeight={700}
					>
						Каталог{' '}
						<Text
							as='span'
							color='#E3484F'
						>
							услуг
						</Text>{' '}
						и компаний швейной отрасли
					</Text>
				</Flex>
				<Accordion
					allowToggle
					gap='0'
					id='services'
				>
					{data.map((el, idx) => (
						<AccordionItem
							key={idx}
							borderBottom='none'
							borderTop='1px solid #000000'
							rounded='30px'
							px={{ md: '22px', base: '0' }}
							className={inter.className}
						>
							{({ isExpanded }) => (
								<>
									<AccordionButton
										_hover={{ bg: 'transparent' }}
										as={Box}
										flex='1'
										// pt={{ md: '40px', base: '28px' }}
										p={{ md:'40px 0', base: '20px' }}
										cursor='pointer'
									>
										<Flex
											justifyContent='space-between'
											alignItems='start '
											w='100%'
										>
											<Flex alignItems='center'>
												<Text
													fontSize='16px'
													mr={4}
													mt={-8}
												>
													{`0${el.index + 1}`}{' '}
												</Text>
												<TitleComponent
													w={{ md: '400px', base: '100%' }}
													fontSize={{ md: '32px', base: '26px' }}
													lineHeight='38.4px'
												>
													{el.title}
												</TitleComponent>
											</Flex>

											<Box display={{ md: 'block', base: 'none' }}>
												{!isExpanded ? (
													<Text
														textAlign='start'
														fontSize='20px'
														lineHeight='38.4px'
													>
														{el.description.length > 50
															? `${el.description.slice(0, 50)}...`
															: el.description}
													</Text>
												) : (
													<Box
														display='flex'
														justifyContent='center'
														position='relative'
													>
														<Box
															w='300px'
															h='220px'
															overflow='hidden'
															borderRadius={10}
														>
															<Image
																style={{
																	width: '100%',
																	height: '100%',
																	objectFit: 'cover'
																}}
																src={el.image}
																alt='Image'
															/>
														</Box>
													</Box>
												)}
											</Box>
											<Flex
												alignItems='center'
												h='100%'
												gap='53px'
											>
												{isExpanded && (
													<Text
														display={{ md: 'block', base: 'none' }}
														maxW='350px'
														fontSize='20px'
														lineHeight='24px'
														color='#212121'
														// bg="red"
													>
														{el.description}
													</Text>
												)}
												{isExpanded ? (
													<Flex
														flexDirection='column'
														alignItems='end'
														justifyContent='space-between'
														h='100%'
														gap='40px'
													>
														<HiOutlineMinus fontSize='24px' />
													</Flex>
												) : (
													<AiOutlinePlus fontSize='24px' />
												)}
											</Flex>
										</Flex>
									</AccordionButton>
									<AccordionPanel px='4'>
										<Box
											display={{ md: 'none', base: 'block' }}
											mt='3'
										>
											<Box position='relative'>
												<Box
													w='100%'
													h='220px'
													rounded='8px'
													overflow='hidden'
												>
													<Image
														src={el.image}
														alt='Image'
													/>
												</Box>
											</Box>
											<Text
												mt='5'
												textAlign='start'
												fontSize='20px'
												lineHeight='24px'
												color='#212121'
											>
												{el.description}
											</Text>
										</Box>
									</AccordionPanel>
								</>
							)}
						</AccordionItem>
					))}
				</Accordion>
			</Container>
		</Box>
	)
}

export default AccordionComponent
