'use client'

import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'

import CategoryCard from '@/components/ui/cards/category-card'
import ContainerDefault from '@/components/ui/providers/container'
import Title42 from '@/components/ui/texts/Title42'

export default function CatalogCompany() {
	const [active, setActive] = useState(0)

	const data = [
		'Швейная фабрика',
		'Разработка лекал',
		'Ателье',
		'Производитель мебельных тканей',
		'Швейное оборудование'
	]

	return (
		<Box
			mt='50px'
			pb='200px'
		>
			<ContainerDefault>
				<Flex gap={{ lg: '83px', md: '30px', base: '5' }}>
					<Box
						minW='233px'
						maxW='233px'
						pt='5'
					>
						<Title42>Каталог компаний</Title42>
						<Stack
							mt='30px'
							spacing='14px'
							pl='4'
						>
							{data?.map((el, idx) => (
								<Text
									key={idx}
									onClick={() => setActive(idx)}
									fontWeight={active === idx ? '600' : '400'}
									fontSize='14px'
									lineHeight='24px'
									color='#23262F'
									opacity={active === idx ? '1' : '.7'}
									cursor='pointer'
									_hover={{ textDecoration: 'underline' }}
								>
									{el}
								</Text>
							))}
						</Stack>
					</Box>

					<Box
						maxW='100%'
						w='100%'
					>
						<Stack spacing='5'>
							<CategoryCard />
							<CategoryCard />
							<CategoryCard />
							<CategoryCard />
						</Stack>
					</Box>
				</Flex>
			</ContainerDefault>
		</Box>
	)
}
