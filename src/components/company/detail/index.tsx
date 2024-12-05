import { Box, Divider, Flex, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { IconType } from 'react-icons/lib'
import { LuEye } from 'react-icons/lu'
import { PiShareFatLight } from 'react-icons/pi'
import { TfiHeart } from 'react-icons/tfi'

import { SocialMediaIcons } from '@/components/navbar/data'
import Rating from '@/components/ui/elements/Rating'
import ContainerDefault from '@/components/ui/providers/container'
import UserDashboard from '@/components/ui/providers/user-dashboard'
import Text12 from '@/components/ui/texts/Text12'
import Title24 from '@/components/ui/texts/Title24'

import CompanyImage from '@/assets/img/companyname.png'

const listItem = [
	{ id: 1, name: 'Платье' },
	{ id: 2, name: 'Блузка' },
	{ id: 3, name: 'Жакеты' },
	{ id: 4, name: 'Юбки' }
]

const CompanyDetail = () => {
	return (
		<Box
			mt='30px'
			pb={{ md: '180px', base: '60px' }}
		>
			<ContainerDefault>
				<Flex gap='34px'>
					<LeftSide />
					<Box
						maxW='100%'
						w='100%'
					>
						<UserDashboard py='40px'>
							<Flex
								justifyContent='space-between'
								alignItems='center'
							>
								<Flex
									gap='5'
									alignItems='center'
								>
									<Title24>Brand Name</Title24>
									<Text12 opacity='.5'>/</Text12>
									<Text12
										opacity='.5'
										lineHeight='14.5px'
									>
										Швейное производство
									</Text12>
									<Text12 opacity='.5'>/</Text12>
									<Rating />
								</Flex>

								<Flex
									bg='#FFFFFF'
									rounded='6px'
									gap='3'
									px='2'
									py='5px'
								>
									<PiShareFatLight
										opacity='.5'
										fontSize='18px'
									/>
									<Box
										h='100%'
										w='1px'
										bg='#000000'
										opacity='.4'
									/>
									<TfiHeart opacity='.5' />
									<Divider
										orientation='vertical'
										h='100%'
										w='1px'
										bg='#000000'
										opacity='.4'
									/>
									<Flex
										gap='1'
										opacity='.5'
										alignItems='center'
									>
										<Text
											fontSize='10px'
											color='#000000'
											lineHeight='13px'
										>
											12
										</Text>
										<LuEye />
									</Flex>
								</Flex>
							</Flex>

							<Flex
								gap={{ xl: '50px', md: '5' }}
								mt='5'
							>
								<Box
									maxW='560px'
									w='100%'
								>
									<Box
										h='355px'
										w='100%'
										rounded='13.5px'
										overflow='hidden'
										position='relative'
										border='1.13px solid #0000001F'
									>
										<Image
											src={CompanyImage}
											alt='Image'
											className='full-image'
										/>
										<Flex
											position='absolute'
											bottom='0'
											left='0'
											w='100%'
											h='70px'
											bg='linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(8, 8, 8, 0) 100%)'
											zIndex='2'
											px='6'
											py='5'
											alignItems='end'
										>
											<Text
												color='#FFFFFF'
												fontSize='12px'
												lineHeight='15.6px'
												fontWeight='400'
											>
												Пошив любых видов изделий
											</Text>
										</Flex>
									</Box>

									<Flex
										mt='18px'
										w='100%'
										overflowX='auto'
										className='unscroll'
									>
										<Flex gap='5.21px'>
											{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(el => (
												<Box
													key={el}
													rounded='7.55px'
													w='75.5px'
													h='75.5px'
													border='1.43px solid #E4E7EC'
													overflow='hidden'
												>
													<Image
														src={CompanyImage}
														alt='Image'
														className='full-image'
													/>
												</Box>
											))}
										</Flex>
									</Flex>
								</Box>

								<Stack
									py='14px'
									spacing='4'
									w='316px'
								>
									<RightSideItem
										title='Ключевые слова:'
										list={listItem}
									/>
									<RightSideItem
										title='Подкатегории:'
										list={listItem}
									/>
									<RightSideItem
										title='Персонал:'
										list={listItem}
										withoutBorder={true}
									/>
								</Stack>
							</Flex>

							<Box my='40px'>
								<Title24>Данные компании</Title24>
								<Stack
									mt='5'
									spacing='5'
									padding='30px'
									bg='#FFFFFF'
									rounded='16px'
								>
									<CompanyDataCard
										keyWord='Год основания'
										value='2020'
									/>
									<CompanyDataCard
										keyWord='Площадь'
										value='250-500m2'
									/>
									<CompanyDataCard
										keyWord='Количество сотрудников'
										value='55'
									/>
									<CompanyDataCard
										keyWord='Тип сырья'
										value='Собственное, Давальческое'
									/>
									<CompanyDataCard
										keyWord='Количество выпускаемой продукции в месяц'
										value='10 000-15 000шт.'
									/>
								</Stack>
							</Box>

							<Box>
								<Title24>Документы</Title24>
								<Stack
									mt='5'
									spacing='5'
									padding='30px'
									bg='#FFFFFF'
									rounded='16px'
								>
									<CompanyDataCard
										keyWord='ОГРН/ОГРНИП'
										value='2345876543234'
									/>
									<CompanyDataCard
										keyWord='ИНН'
										value='1146789е67'
									/>
									<CompanyDataCard
										keyWord='Маркировка товара'
										value='Да'
									/>
								</Stack>
							</Box>
						</UserDashboard>
					</Box>
				</Flex>
			</ContainerDefault>
		</Box>
	)
}

function LeftSide() {
	return (
		<Box
			minW='282px'
			maxW='282px'
		>
			<Box
				border='1px solid #0000001F'
				rounded='12px'
				padding='6'
			>
				<Flex
					alignItems='center'
					gap='3'
				>
					<Box
						rounded='50%'
						minW='68px'
						maxW='68px'
						h='68px'
						border='1px solid #2563EB33'
						overflow='hidden'
					>
						<Image
							src={CompanyImage}
							alt='Image'
							className='full-image'
						/>
					</Box>
					<Box>
						<Text
							textTransform='uppercase'
							fontSize='20px'
							lineHeight='32px'
							letterSpacing='-0.5px'
							color='#12141D'
						>
							Liliya
						</Text>
						<Box
							color='#3046BF'
							fontSize='14px'
							lineHeight='18.26px'
							fontWeight='400'
						>
							<Link
								href={'www.liliya.kg'}
								target='_blank'
							>
								www.liliya.kg
							</Link>
						</Box>
					</Box>
				</Flex>

				<Text12
					mt='14px'
					fontSize='14px'
					textTransform='none'
				>
					Наша фабрика входит в Топ 10 лучших производителей в стране
				</Text12>
			</Box>

			<Stack
				spacing='22px'
				border='1px solid #0000001F'
				rounded='12px'
				padding='6'
				my='12px'
			>
				<Stack spacing='5px'>
					<Text12>Телефон</Text12>
					<LinkText
						link='tel:+996 789 654 678'
						text='+996 789 654 678'
					/>
				</Stack>
				<Stack spacing='5px'>
					<Text12>Адрес</Text12>
					<LinkText
						link=''
						text='ул.Буденного, 134/2'
					/>
				</Stack>
				<Stack spacing='5px'>
					<Text12>Email</Text12>
					<LinkText
						link='mailto:example@gmail.com'
						text='example@gmail.com'
					/>
					<Text12
						fontSize='14px'
						textTransform='none'
					>
						Бишкек/Кыргызстан
					</Text12>
				</Stack>
				<Divider
					bg='#12141D'
					h='1px'
					w='100%'
					opacity='.1'
				/>
				<Flex gap='30px'>
					<LinkIcon
						icon={SocialMediaIcons.WHATSAPP}
						link=''
					/>
					<LinkIcon
						icon={SocialMediaIcons.INSTAGRAM}
						link=''
					/>
					<LinkIcon
						icon={SocialMediaIcons.TELEGRAM}
						link=''
					/>
				</Flex>
			</Stack>
			<Stack
				border='1px solid #0000001F'
				rounded='12px'
				padding='6'
				spacing='5px'
			>
				<Text12>Министерство юстиции</Text12>
				<Box
					color='#3046BF'
					fontSize='14px'
					lineHeight='18.26px'
					fontWeight='400'
				>
					<Link
						href={'www.liliya.kg'}
						target='_blank'
					>
						www.liliya.kg
					</Link>
				</Box>
			</Stack>
		</Box>
	)
}

interface LinkTextProps {
	link: string
	blank?: boolean
	text: string
}
function LinkText(props: LinkTextProps) {
	return (
		<Link
			href={props.link}
			target={props.blank ? '_blank' : '_self'}
		>
			<Text
				fontWeight='600'
				fontSize='18px'
				lineHeight='24px'
				color='#12141D'
			>
				{props.text}
			</Text>
		</Link>
	)
}

function LinkIcon(props: { icon: IconType; link: string }) {
	return (
		<Link
			href={props.link}
			target='_blank'
		>
			<Flex
				fontSize='23px'
				border='1px solid #12141D1A'
				w='44px'
				h='44px'
				rounded='50%'
				justifyContent='center'
				alignItems='center'
			>
				<props.icon color='#12141D' />
			</Flex>
		</Link>
	)
}

interface RightSideItemProps {
	title: string
	list: {
		id: number
		name: string
	}[]
	withoutBorder?: boolean
}
function RightSideItem(props: RightSideItemProps) {
	return (
		<Stack
			spacing='14px'
			pb='5'
			borderBottom={
				!props.withoutBorder ? '1px solid rgba(0, 0, 0, .1)' : 'none'
			}
		>
			<Text
				fontWeight='600'
				fontSize='14px'
				lineHeight='17px'
				color='#1C1B1F'
			>
				{props.title}
			</Text>
			<Flex
				gap='2'
				flexWrap='wrap'
			>
				{props.list?.map(el => (
					<Box
						key={el.id}
						border='1px solid #E6E6E6'
						rounded='100px'
						whiteSpace='nowrap'
						px='14px'
						py='2'
						h='29px'
						fontWeight='400'
						fontSize='10px'
						lineHeight='13.04px'
						color='#000000'
					>
						{el.name}
					</Box>
				))}
			</Flex>
		</Stack>
	)
}

function CompanyDataCard(props: { keyWord: string; value: string }) {
	return (
		<Flex
			alignItems='end'
			fontSize='14px'
			lineHeight='17px'
			justifyContent='space-between'
			whiteSpace='nowrap'
		>
			<Text
				fontWeight='600'
				color='#1C1B1F'
			>
				{props.keyWord}
			</Text>
			<Box
				maxW='100%'
				w='100%'
				borderBottom='1px dashed rgba(0, 0, 0, .1)'
			/>
			<Text
				fontWeight='400'
				color='#12141D'
				opacity='.8'
			>
				{props.value}
			</Text>
		</Flex>
	)
}

export default CompanyDetail
