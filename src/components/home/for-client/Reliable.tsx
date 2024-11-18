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

import Description from '@/components/ui/texts/Description'
import Title from '@/components/ui/texts/Title'

import img1 from '@/assets/img/ReliableImg1.png'
import img2 from '@/assets/img/Reliableimg2.png'
import img3 from '@/assets/img/Reliableimg3.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const data = [
	{
		title: 'Разнообразие материалов',
		desc: 'Ищите широкий ассортимент тканей, ниток, и аксессуаров для любого типа продукции.',
		url: img1
	},
	{
		title: 'Проверенные поставщики',
		desc: 'Мы сотрудничаем только с проверенными производителями, чтобы обеспечить вас качественными материалами.',
		url: img2
	},
	{
		title: 'Сотрудничество напрямую',
		desc: 'Заключайте сделки напрямую с поставщиками. Согласовывайте условия и сроки поставок без посредников.',
		url: img3
	}
]

const Reliable = () => {
	return (
		<Box py={20}>
			<Container maxW={CONTAINER_WIDTH}>
				<Box display={{ md: 'flex', base: 'none' }}>
					<Tabs
						variant='unstyled'
						display='flex'
						gap={12}
					>
						<TabList
							gap={4}
							display='flex'
							flexDirection='column'
						>
							<Title
								pb={3}
								textAlign='start'
								fontSize={40}
								lineHeight='48px'
							>
								Надёжные поставщики для вашего производства
							</Title>
							{data.map((el, index) => (
								<Tab
									border='solid 1px grey'
									borderRadius={10}
									p='14px 20px'
									key={index}
									_selected={{ bg: '#F3F4FB' }}
								>
									<Box textAlign='start'>
										<Text
											fontSize={18}
											fontWeight={600}
										>
											{el.title}
										</Text>
										<Description
											color='#52525B'
											mt={2}
											lineHeight='26px'
										>
											{el.desc}
										</Description>
									</Box>
								</Tab>
							))}
						</TabList>
						<TabPanels>
							{data.map((el, index) => (
								<TabPanel
									overflow='hidden'
									w={680}
									h={517}
									key={index}
								>
									<Image
										style={{
											width: '100%',
											height: '100%',
											objectFit: 'cover'
										}}
										src={el.url}
										alt='img'
									/>
								</TabPanel>
							))}
						</TabPanels>
					</Tabs>
				</Box>
				<Box display={{ md: 'none', base: 'block' }}>
					<Title
						pb={3}
						textAlign='start'
						fontSize={27}
						lineHeight='48px'
					>
						Надёжные поставщики для вашего производства
					</Title>
					 <Flex flexDirection="column" gap={4}>
           {data.map((el, index) => (
						<Box p={4} borderRadius={10} bg="#F3F4FB" key={index}>
							 
							<Text
								fontSize={18}
								fontWeight={600}
							>
								{el.title}
							</Text>
							<Description
								color='#52525B'
								mt={2}
								lineHeight='24px'
                fontSize={{ md: 16, base: 14 }}
							>
								{el.desc}
							</Description>

              <Box
								overflow='hidden'
								w='100%'
								h={200}
								borderRadius={10}
                mt={4}
							>
								<Image
									style={{ width: '100%', height: '100%', objectFit: 'cover' }}
									src={el.url}
									alt='img'
								/>
							</Box>
						</Box>
					))}
           </Flex>
				</Box>
			</Container>
		</Box>
	)
}

export default Reliable
