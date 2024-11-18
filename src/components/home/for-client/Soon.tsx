// import {
// 	Box,
// 	Container,
// 	Flex,
// 	Tab,
// 	TabList,
// 	TabPanel,
// 	TabPanels,
// 	Tabs,
// 	Text
// } from '@chakra-ui/react'
// import Image from 'next/image'
// import React from 'react'
// import { AiOutlineHeart } from 'react-icons/ai'
// import { FaCrown } from 'react-icons/fa'
// import { IoArrowRedoOutline } from 'react-icons/io5'

// import imgMoon from '@/assets/img/soon1.png'
// import imgMoon2 from '@/assets/img/soon2.png'

// import { CONTAINER_WIDTH } from '@/config/_variables.config'

// const data = [
// 	{
// 		val: [
// 			{ public_date: '08.89.2024' },
// 			{ produc_time: '24.89.2024' },
// 			{ address: 'Россия' },
// 			{ quantity: '100 шт.' },
// 			{ price: '255 руб.' },
// 			{ total_price: '25 500 руб.' },
// 			{ Customer: 'John Doe' }
// 		],
// 		name: [
// 			{ public_date: 'Дата публикации' },
// 			{ produc_time: 'Срок изготовления' },
// 			{ address: 'Адрес доставки' },
// 			{ quantity: 'Количество' },
// 			{ price: 'Цена' },
// 			{ total_price: 'Общая сумма' },
// 			{ Customer: 'John Doe' }
// 		],

// 		images: [
// 			{ img: imgMoon },
// 			{ img: imgMoon2 },
// 			{ img: imgMoon },
// 			{ img: imgMoon2 }
// 		]
// 	}
// ]

// const Soon = () => {
// 	return (
// 		<Box>
// 			<Container maxW={CONTAINER_WIDTH}>
// 				<Flex
// 					gap={6}
// 					p={4}
// 					border='solid 1px #FFC100'
// 					borderRadius={10}
// 					w={500}
// 					h='100%'
// 				>
// 					<Box>
// 						<Tabs
// 							variant='unstyled'
// 							display='flex'
// 							flexDirection='column-reverse'
// 						>
// 							<TabList>
// 								{data[0].images.map((image, index) => (
// 									<Tab
// 										p='2px'
// 										mt={2}
// 										key={index}
// 									>
// 										<Image
// 											width={33}
// 											height={33}
// 											style={{ borderRadius: '4px' }}
// 											src={image.img}
// 											alt={`img-${index}`}
// 										/>
// 									</Tab>
// 								))}
// 							</TabList>
// 							<TabPanels>
// 								{data[0].images.map((image, index) => (
// 									<TabPanel
// 										p={0}
// 										key={index}
// 									>
// 										<Image
// 											width={174}
// 											height={176}
// 											src={image.img}
// 											alt={`img-${index}`}
// 										/>
// 									</TabPanel>
// 								))}
// 							</TabPanels>
// 						</Tabs>
// 					</Box>
// 					<Box w={286}>
						 
// 						{data.map((el, index) => (
// 							<Box key={index}>
// 								<Flex
// 									alignItems='center'
// 									justifyContent='space-between'
// 								>
// 									<Text
// 										fontSize={14}
// 										fontWeight={600}
// 									>
// 										Пошив платья
// 									</Text>
// 									<Flex gap={2}>
// 										<AiOutlineHeart />
// 										<IoArrowRedoOutline />
// 										<FaCrown />
// 									</Flex>
// 								</Flex>
// 								<Flex  justifyContent='space-between'>
// 									<Box>
// 										{el.name.map((el, index) => (
// 											<Flex
// 												key={index}
// 												flexDirection='column'
// 											>
// 												<Text>{el.public_date}</Text>
// 												<Text>{el.produc_time}</Text>
// 												<Text>{el.address}</Text>
// 												<Text>{el.quantity}</Text>
// 												<Text>{el.price}</Text>
// 												<Text>{el.total_price}</Text>
// 												<Text>{el.Customer}</Text>
// 											</Flex>
// 										))}
// 									</Box>
									 
// 									<Box>
// 										{el.val.map((el, index) => (
// 											<Flex
// 												key={index}
// 												flexDirection='column'
// 											>
// 												<Text>{el.public_date}</Text>
// 												<Text>{el.produc_time}</Text>
// 												<Text>{el.address}</Text>
// 												<Text>{el.quantity}</Text>
// 												<Text>{el.price}</Text>
// 												<Text>{el.total_price}</Text>
// 												<Text>{el.Customer}</Text>
// 											</Flex>
// 										))}
// 									</Box>
// 								</Flex>
// 							</Box>
// 						))}
// 					</Box>
// 				</Flex>
// 			</Container>
// 		</Box>
// 	)
// }

// export default Soon
 
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
			{ total_price: '25 500 руб.' },
			// { Customer: 'John Doe' }
		],
		name: [
			{ public_date: 'Дата публикации' },
			{ produc_time: 'Срок изготовления' },
			{ address: 'Адрес доставки' },
			{ quantity: 'Количество' },
			{ price: 'Цена' },
			{ total_price: 'Общая сумма' },
			// { Customer: 'Заказчик' }
		],

		images: [
			{ img: imgMoon },
			{ img: imgMoon2 },
			{ img: imgMoon },
			{ img: imgMoon2 }
		]
	},
	
]


const data2 = [
	{
		val: [
			{ public_date: '08.89.2024' },
			{ produc_time: '24.89.2024' },
			{ address: 'Россия' },
			{ quantity: '100 шт.' },
			{ price: '255 руб.' },
			{ total_price: '25 500 руб.' },
			// { Customer: 'John Doe' }
		],
		name: [
			{ public_date: 'Дата публикации' },
			{ produc_time: 'Срок изготовления' },
			{ address: 'Адрес доставки' },
			{ quantity: 'Количество' },
			{ price: 'Цена' },
			{ total_price: 'Общая сумма' },
			// { Customer: 'Заказчик' }
		],

		images: [
			{ img: imgMoon },
			{ img: imgMoon2 },
			{ img: imgMoon },
			{ img: imgMoon2 }
		]
	},
]

const Soon = () => {
	return (
		<Box>
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					gap={6}
					p={4}
					border="solid 1px #FFC100"
					borderRadius={10}
					w={500}
					h="100%"
				>
					{/* Image Tabs */}
					<Box>
						<Tabs variant="unstyled" display="flex" flexDirection="column-reverse">
							<TabList>
								{data[0].images.map((image, index) => (
									<Tab
										p="2px"
										mt={2}
										key={index}
									>
										<Image
											width={33}
											height={33}
											style={{ borderRadius: '4px' }}
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
									>
										<Image
											width={174}
											height={176}
											src={image.img}
											alt={`img-${index}`}
										/>
									</TabPanel>
								))}
							</TabPanels>
						</Tabs>
					</Box>

					{/* Text Content */}
					<Box w={286}>
						{data.map((el, index) => (
							<Box key={index}>
								{/* Title and Icons */}
								<Flex alignItems="center" justifyContent="space-between" mb={2}>
									<Text fontSize={14} fontWeight={600}>
										Пошив платья
									</Text>
									<Flex gap={2}>
										<AiOutlineHeart />
										<IoArrowRedoOutline />
										<FaCrown />
									</Flex>
								</Flex>

								<Flex justifyContent="space-between">
									<Box w="100%" mt={2}>
										{el.name.map((item, idx) => (
											<Flex
												key={idx}
												alignItems="center"
												justifyContent="space-between"
												position="relative"
												py="2px"
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
												<Text color="#777777" fontSize={12} fontWeight={400}>{Object.values(item)[0]}</Text>
												<Text fontSize={12} fontWeight={400}>{Object.values(el.val[idx])[0]}</Text>
											</Flex>
										))}
									 <Flex borderBottom='1px dashed grey'   mt={4} justifyContent="space-between">
									 <Text color="#777777" fontSize={12} fontWeight={400}>Заказчик</Text>
									 <Text fontSize={12} fontWeight={600}>John Doe</Text>
									 </Flex>
									</Box>
								</Flex>
							</Box>
						))}
					</Box>
				</Flex>
			</Container>
		</Box>
	)
}

export default Soon
	