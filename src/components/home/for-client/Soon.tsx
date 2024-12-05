import {
	Box,
	Container,
	Flex,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text
} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaCrown } from 'react-icons/fa'
import { IoArrowRedoOutline } from 'react-icons/io5'

import Description from '@/components/ui/texts/Description'
import Title from '@/components/ui/texts/Title'

import imgMoon from '@/assets/img/soon1.png'
import imgMoon2 from '@/assets/img/soon2.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const data = [
	{
		val: [
			{ public_date: '08.89.2024' },
			{ produc_time: '24.89.2024' },
			{ address: 'Россия' },
			{ quantity: '100 шт.' },
			{ price: '255 руб.' },
			{ total_price: '25 500 руб.' }
		],
		name: [
			{ public_date: 'Дата публикации' },
			{ produc_time: 'Срок изготовления' },
			{ address: 'Адрес доставки' },
			{ quantity: 'Количество' },
			{ price: 'Цена' },
			{ total_price: 'Общая сумма' }
		],

		images: [
			{ img: imgMoon },
			{ img: imgMoon2 },
			{ img: imgMoon },
			{ img: imgMoon2 }
		]
	}
]

const Soon = () => {
	return (
		<Flex
		flexDir="column"
			w='100%'
			justifyContent='center'
			alignItems="center"
		>
			<Flex
			pb={10}
				flexDirection='column'
				w={{ md: 600, base: '100%' }}
				alignItems='center'
				justifyContent='center'
				textAlign='center'
				gap={4}
			>
				<Text bg='#3F3F3F2E' fontSize={12} p="6px 20px" border="solid 1px #F3F4FB" borderRadius={40}>СКОРО</Text>
				<Title 	lineHeight={{ md: '46px', base: '36px' }} fontSize={{ md: 42, base: 28 }}>Доступ к швейным заказам</Title>
				<Description
					lineHeight={{ md: '26px', base: '26px' }}
					textAlign='center'
				>
					Мы работаем над тем, чтобы в ближайшее время предоставить вам получать
					швейные заказы от заказчиков.
				</Description>
			</Flex>
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					flexDir='column'
					w='100%'
					justifyContent='center'
				>
					<Flex
						flexDir={{ md: 'row', base: 'column' }}
						justifyContent='center'
						gap={4}
					>
						<Flex
							gap={6}
							p={4}
							border='solid 1px #FFC100'
							bg='#FFFDF4'
							borderRadius={10}
							w={{ md: 500, base: '100% ' }}
							h='100%'
							flexDir={{ md: 'row', base: 'column' }}
						>
							{/* Image Tabs */}
							<Box>
								<Tabs
									variant='unstyled'
									display='flex'
									flexDirection='column-reverse'
								>
									<TabList>
										{data[0].images.map((image, index) => (
											<Tab
												p='2px'
												mt={2}
												key={index}
												w={{ md: 33, base: 65 }}
												h={{ md: 33, base: 65 }}
												overflow='hidden'
												borderRadius={4}
											>
												<Image
													style={{
														width: '100%',
														height: '100%',
														objectFit: 'cover'
													}}
													src={image.img}
													alt={`img-${index}`}
												/>
											</Tab>
										))}
									</TabList>
									<TabPanels>
										{data[0].images.map((image, index) => (
											<TabPanel
												p={0}
												key={index}
												w={{ md: 174, base: '100%' }}
												h={{ md: 176, base: 304 }}
												overflow='hidden'
												borderRadius={4}
											>
												<Image
													style={{
														width: '100%',
														height: '100%',
														objectFit: 'cover'
													}}
													src={image.img}
													alt={`img-${index}`}
												/>
											</TabPanel>
										))}
									</TabPanels>
								</Tabs>
							</Box>

							{/* Text Content */}
							<Box w={{ md: 286, base: '100% ' }}>
								{data.map((el, index) => (
									<Box key={index}>
										{/* Title and Icons */}
										<Flex
											alignItems='center'
											justifyContent='space-between'
											mb={2}
										>
											<Text
												fontSize={14}
												fontWeight={600}
											>
												Пошив платья
											</Text>
											<Flex gap={2}>
												<AiOutlineHeart />
												<IoArrowRedoOutline />
												<FaCrown />
											</Flex>
										</Flex>

										<Flex justifyContent='space-between'>
											<Box
												w='100%'
												mt={2}
											>
												{el.name.map((item, idx) => (
													<Flex
														key={idx}
														alignItems='center'
														justifyContent='space-between'
														position='relative'
														py='2px'
														_after={
															idx < el.name.length - 1
																? {
																		content: '""',
																		position: 'absolute',
																		bottom: 0,
																		width: '100%',
																		borderBottom: '1px dashed grey'
																	}
																: {}
														}
													>
														<Text
															color='#777777'
															fontSize={12}
															fontWeight={400}
														>
															{Object.values(item)[0]}
														</Text>
														<Text
															fontSize={12}
															fontWeight={400}
														>
															{Object.values(el.val[idx])[0]}
														</Text>
													</Flex>
												))}
												<Flex
													borderBottom='1px dashed grey'
													mt={4}
													justifyContent='space-between'
												>
													<Text
														color='#777777'
														fontSize={12}
														fontWeight={400}
													>
														Заказчик
													</Text>
													<Text
														fontSize={12}
														fontWeight={600}
													>
														John Doe
													</Text>
												</Flex>
											</Box>
										</Flex>
									</Box>
								))}
							</Box>
						</Flex>

						<Flex
							gap={6}
							bg='#FFFDF4'
							p={4}
							border='solid 1px #FFC100'
							borderRadius={10}
							w={{ md: 500, base: '100% ' }}
							h='100%'
							flexDir={{ md: 'row', base: 'column' }}
						>
							{/* Image Tabs */}
							<Box>
								<Tabs
									variant='unstyled'
									display='flex'
									flexDirection='column-reverse'
								>
									<TabList>
										{data[0].images.map((image, index) => (
											<Tab
												p='2px'
												mt={2}
												key={index}
												w={{ md: 33, base: 65 }}
												h={{ md: 33, base: 65 }}
												overflow='hidden'
												borderRadius={4}
											>
												<Image
													style={{
														width: '100%',
														height: '100%',
														objectFit: 'cover'
													}}
													src={image.img}
													alt={`img-${index}`}
												/>
											</Tab>
										))}
									</TabList>
									<TabPanels>
										{data[0].images.map((image, index) => (
											<TabPanel
												p={0}
												key={index}
												w={{ md: 174, base: '100%' }}
												h={{ md: 176, base: 304 }}
												overflow='hidden'
												borderRadius={4}
											>
												<Image
													style={{
														width: '100%',
														height: '100%',
														objectFit: 'cover'
													}}
													src={image.img}
													alt={`img-${index}`}
												/>
											</TabPanel>
										))}
									</TabPanels>
								</Tabs>
							</Box>

							{/* Text Content */}
							<Box w={{ md: 286, base: '100% ' }}>
								{data.map((el, index) => (
									<Box key={index}>
										{/* Title and Icons */}
										<Flex
											alignItems='center'
											justifyContent='space-between'
											mb={2}
										>
											<Text
												fontSize={14}
												fontWeight={600}
											>
												Пошив платья
											</Text>
											<Flex gap={2}>
												<AiOutlineHeart />
												<IoArrowRedoOutline />
												<FaCrown />
											</Flex>
										</Flex>

										<Flex justifyContent='space-between'>
											<Box
												w='100%'
												mt={2}
											>
												{el.name.map((item, idx) => (
													<Flex
														key={idx}
														alignItems='center'
														justifyContent='space-between'
														position='relative'
														py='2px'
														_after={
															idx < el.name.length - 1
																? {
																		content: '""',
																		position: 'absolute',
																		bottom: 0,
																		width: '100%',
																		borderBottom: '1px dashed grey'
																	}
																: {}
														}
													>
														<Text
															color='#777777'
															fontSize={12}
															fontWeight={400}
														>
															{Object.values(item)[0]}
														</Text>
														<Text
															fontSize={12}
															fontWeight={400}
														>
															{Object.values(el.val[idx])[0]}
														</Text>
													</Flex>
												))}
												<Flex
													borderBottom='1px dashed grey'
													mt={4}
													justifyContent='space-between'
												>
													<Text
														color='#777777'
														fontSize={12}
														fontWeight={400}
													>
														Заказчик
													</Text>
													<Text
														fontSize={12}
														fontWeight={600}
													>
														John Doe
													</Text>
												</Flex>
											</Box>
										</Flex>
									</Box>
								))}
							</Box>
						</Flex>
					</Flex>

					<Flex
						flexDir={{ md: 'row', base: 'column' }}
						mt={4}
						justifyContent='center'
						gap={4}
					>
						<Flex
							gap={6}
							p={4}
							bg='#F7F7F7'
							borderRadius={10}
							w={{ md: 500, base: '100% ' }}
							h='100%'
							flexDir={{ md: 'row', base: 'column' }}
						>
							{/* Image Tabs */}
							<Box>
								<Tabs
									variant='unstyled'
									display='flex'
									flexDirection='column-reverse'
								>
									<TabList>
										{data[0].images.map((image, index) => (
											<Tab
												p='2px'
												mt={2}
												key={index}
												w={{ md: 33, base: 65 }}
												h={{ md: 33, base: 65 }}
												overflow='hidden'
												borderRadius={4}
											>
												<Image
													style={{
														width: '100%',
														height: '100%',
														objectFit: 'cover'
													}}
													src={image.img}
													alt={`img-${index}`}
												/>
											</Tab>
										))}
									</TabList>
									<TabPanels>
										{data[0].images.map((image, index) => (
											<TabPanel
												p={0}
												key={index}
												w={{ md: 174, base: '100%' }}
												h={{ md: 176, base: 304 }}
												overflow='hidden'
												borderRadius={4}
											>
												<Image
													style={{
														width: '100%',
														height: '100%',
														objectFit: 'cover'
													}}
													src={image.img}
													alt={`img-${index}`}
												/>
											</TabPanel>
										))}
									</TabPanels>
								</Tabs>
							</Box>

							{/* Text Content */}
							<Box w={{ md: 286, base: '100% ' }}>
								{data.map((el, index) => (
									<Box key={index}>
										{/* Title and Icons */}
										<Flex
											alignItems='center'
											justifyContent='space-between'
											mb={2}
										>
											<Text
												fontSize={14}
												fontWeight={600}
											>
												Пошив платья
											</Text>
											<Flex gap={2}>
												<AiOutlineHeart />
												<IoArrowRedoOutline />
												<FaCrown />
											</Flex>
										</Flex>

										<Flex justifyContent='space-between'>
											<Box
												w='100%'
												mt={2}
											>
												{el.name.map((item, idx) => (
													<Flex
														key={idx}
														alignItems='center'
														justifyContent='space-between'
														position='relative'
														py='2px'
														_after={
															idx < el.name.length - 1
																? {
																		content: '""',
																		position: 'absolute',
																		bottom: 0,
																		width: '100%',
																		borderBottom: '1px dashed grey'
																	}
																: {}
														}
													>
														<Text
															color='#777777'
															fontSize={12}
															fontWeight={400}
														>
															{Object.values(item)[0]}
														</Text>
														<Text
															fontSize={12}
															fontWeight={400}
														>
															{Object.values(el.val[idx])[0]}
														</Text>
													</Flex>
												))}
												<Flex
													borderBottom='1px dashed grey'
													mt={4}
													justifyContent='space-between'
												>
													<Text
														color='#777777'
														fontSize={12}
														fontWeight={400}
													>
														Заказчик
													</Text>
													<Text
														fontSize={12}
														fontWeight={600}
													>
														John Doe
													</Text>
												</Flex>
											</Box>
										</Flex>
									</Box>
								))}
							</Box>
						</Flex>

						<Flex
							gap={6}
							p={4}
							bg='#F7F7F7'
							borderRadius={10}
							w={{ md: 500, base: '100% ' }}
							h='100%'
							flexDir={{ md: 'row', base: 'column' }}
						>
							{/* Image Tabs */}
							<Box>
								<Tabs
									variant='unstyled'
									display='flex'
									flexDirection='column-reverse'
								>
									<TabList>
										{data[0].images.map((image, index) => (
											<Tab
												p='2px'
												mt={2}
												key={index}
												w={{ md: 33, base: 65 }}
												h={{ md: 33, base: 65 }}
												overflow='hidden'
												borderRadius={4}
											>
												<Image
													style={{
														width: '100%',
														height: '100%',
														objectFit: 'cover'
													}}
													src={image.img}
													alt={`img-${index}`}
												/>
											</Tab>
										))}
									</TabList>
									<TabPanels>
										{data[0].images.map((image, index) => (
											<TabPanel
												p={0}
												key={index}
												w={{ md: 174, base: '100%' }}
												h={{ md: 176, base: 304 }}
												overflow='hidden'
												borderRadius={4}
											>
												<Image
													style={{
														width: '100%',
														height: '100%',
														objectFit: 'cover'
													}}
													src={image.img}
													alt={`img-${index}`}
												/>
											</TabPanel>
										))}
									</TabPanels>
								</Tabs>
							</Box>

							{/* Text Content */}
							<Box w={{ md: 286, base: '100% ' }}>
								{data.map((el, index) => (
									<Box key={index}>
										{/* Title and Icons */}
										<Flex
											alignItems='center'
											justifyContent='space-between'
											mb={2}
										>
											<Text
												fontSize={14}
												fontWeight={600}
											>
												Пошив платья
											</Text>
											<Flex gap={2}>
												<AiOutlineHeart />
												<IoArrowRedoOutline />
												<FaCrown />
											</Flex>
										</Flex>

										<Flex justifyContent='space-between'>
											<Box
												w='100%'
												mt={2}
											>
												{el.name.map((item, idx) => (
													<Flex
														key={idx}
														alignItems='center'
														justifyContent='space-between'
														position='relative'
														py='2px'
														_after={
															idx < el.name.length - 1
																? {
																		content: '""',
																		position: 'absolute',
																		bottom: 0,
																		width: '100%',
																		borderBottom: '1px dashed grey'
																	}
																: {}
														}
													>
														<Text
															color='#777777'
															fontSize={12}
															fontWeight={400}
														>
															{Object.values(item)[0]}
														</Text>
														<Text
															fontSize={12}
															fontWeight={400}
														>
															{Object.values(el.val[idx])[0]}
														</Text>
													</Flex>
												))}
												<Flex
													borderBottom='1px dashed grey'
													mt={4}
													justifyContent='space-between'
												>
													<Text
														color='#777777'
														fontSize={12}
														fontWeight={400}
													>
														Заказчик
													</Text>
													<Text
														fontSize={12}
														fontWeight={600}
													>
														John Doe
													</Text>
												</Flex>
											</Box>
										</Flex>
									</Box>
								))}
							</Box>
						</Flex>
					</Flex>
				</Flex>
			</Container>
		</Flex>
	)
}

export default Soon
