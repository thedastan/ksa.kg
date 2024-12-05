import { Box, Button, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { VscSettings } from 'react-icons/vsc'

import Description from '@/components/ui/texts/Description'
import Title from '@/components/ui/texts/Title'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import fon from '@/assets/img/fon.png'


const Sewing = () => {
	return (
		<Box  py={{ md: 40, base: 16 }}>
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					color='white'
					w='100%'
					h={{ md: 442, base: '100%' }}
          p={{ md: 0, base: "40px 10px" }}
					borderRadius={20}
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
					// bg='#3046BF'
					gap={{ md: 10, base: 6 }}

					bgImage={`url(${fon.src})`}
					bgSize="cover"
					bgPosition="center"
					width="100%"
					height={{ md: "442px", base: '100%' }}
				>
					<Text
						fontSize={12}
						fontWeight={400}
						borderRadius={30}
						border='solid 1px #ffffff7e'
						p='3px 14px'
						bg='#FFFFFF2E'
						textTransform='uppercase'
					>
						заказчикам
					</Text>
					<Title
         w={{ md: '100%', base: '100%' }}
						fontSize={{ md: 60, base: 40 }}
						fontWeight={700}
            lineHeight="50px"
						color='white'
					>
						Швейные Производства
					</Title>
					<Description
						w={{ md: 531, base: '100%' }}
						textAlign='center'
						fontSize={{ md: 18, base: 16 }}
						color='white'
					>
						Найдите надежные швейные фабрики для производства продукции любого
						уровня сложности.
					</Description>
					<Flex pt={{ md: 0, base: 4 }} w="90%" justifyContent="center" gap={4} flexDirection={{ md: 'row', base: "column" }}>
						<Button
							w={{ md: 342, base: '100%' }}
							bg='#FFFFFF4D'
							color='white'
							borderRadius={40}
							fontSize={16}
							fontWeight={400}
							display='flex'  
              justifyContent="start" 
						>
							<Box pr={2}>
								<VscSettings />
							</Box>
							Поиск производств
						</Button>
						<Button
							w={{ md: 260, base: '100%' }}
							bg='#E3484F'
							color='white'
              fontSize={16}
							fontWeight={400}
							borderRadius={40}
						>
							Каталог компаний
						</Button>
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

export default Sewing
