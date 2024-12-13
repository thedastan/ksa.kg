import { Box, Checkbox, Divider, Flex, Stack } from '@chakra-ui/react'
import { LuSettings2 } from 'react-icons/lu'

import CompanyCard from '@/components/ui/cards/company-card'
import CategoryItem from '@/components/ui/elements/category-item'
import ContainerDefault from '@/components/ui/providers/container'
import Title14 from '@/components/ui/texts/Title14'
import Title42 from '@/components/ui/texts/Title42'

const AllCompanies = () => {
	return (
		<Box
			mt='51px'
			pb='150px'
		>
			<ContainerDefault>
				<Flex gap={{ lg: '83px', md: '30px', base: '5' }}>
					<Box
						minW='270px'
						maxW='270px'
					>
						<Box
							mt='78.3px'
							border='1px solid #0000001F'
							rounded='14px'
							px='10px'
							py='26px'
						>
							<Flex
								alignItems='center'
								gap='3'
								mb='26px'
							>
								<LuSettings2 fontSize='18px' />
								<Title14
									fontWeight='600'
									lineHeight='19.36px'
								>
									Сортировать
								</Title14>
							</Flex>
							<DividerLine />
							<Stack
								mt='4'
								spacing='5'
							>
								<Stack gap='14px'>
									<Title14>Ключевые слова</Title14>
									<Flex
										flexWrap='wrap'
										mt='14px'
										gap='2'
									>
										{[1, 2, 3, 4, 5, 6, 7, 8].map(el => (
											<CategoryItem key={el}>Платье</CategoryItem>
										))}
									</Flex>
								</Stack>
								<DividerLine />
								<Stack gap='14px'>
									<Flex>
										<Title14>Подкатегории</Title14>
									</Flex>
									<Flex
										flexWrap='wrap'
										gap='2'
									>
										{[1, 2, 3, 4, 5, 6, 7, 8].map(el => (
											<CategoryItem key={el}>
												Пошив постельного белья
											</CategoryItem>
										))}
									</Flex>
								</Stack>
								<DividerLine />
								<Stack gap='14px'>
									<Flex>
										<Title14>Города</Title14>
									</Flex>
									<Stack gap='3'>
										{['Бишкек', 'Ош', 'Токмок', 'Джалал-Абад'].map(
											(el, idx) => (
												<CheckboxCard
													key={idx}
													name={el}
												/>
											)
										)}
									</Stack>
								</Stack>

								<DividerLine />
								<Stack gap='14px'>
									<Flex>
										<Title14>Количество швей</Title14>
									</Flex>
									<Stack gap='3'>
										{['Бишкек', 'Ош', 'Токмок', 'Джалал-Абад'].map(
											(el, idx) => (
												<CheckboxCard
													key={idx}
													name={el}
												/>
											)
										)}
									</Stack>
								</Stack>
							</Stack>
							<Box h='3px' />
						</Box>
					</Box>

					<Box
						maxW='100%'
						w='100%'
					>
						<Flex>
							<Title42>Каталог компаний</Title42>
						</Flex>
						<Stack
							spacing='5'
							mt='30px'
						>
							<CompanyCard />
							<CompanyCard />
							<CompanyCard />
							<CompanyCard />
						</Stack>
					</Box>
				</Flex>
			</ContainerDefault>
		</Box>
	)
}

interface CheckboxCardProps {
	name: string
	isChecked?: boolean
}
function CheckboxCard(props: CheckboxCardProps) {
	return (
		<Checkbox
			isChecked={props.isChecked}
			fontSize='14px'
			lineHeight='18.26px'
			color='#000000'
			gap='6px'
			border='#595D62'
			colorScheme='red'
			size='sm'
			pl='2.7px'
			_focus={{ boxShadow: 'none' }}
		>
			{props.name}
		</Checkbox>
	)
}

function DividerLine() {
	return (
		<Divider
			h='1px'
			bg='#000000'
			opacity='.1'
		/>
	)
}
export default AllCompanies
