'use client'

import {
	Box,
	Container,
	Flex,
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Text
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsArrowRight } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'

import DefButton from '@/components/ui/buttons/DefButton'
import Description from '@/components/ui/texts/Description'

import logo from '@/assets/img/logo.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { activity_pages } from '@/app/activity/data'
import { association_pages } from '@/app/association/data'
import { press_center_pages } from '@/app/press-center/data'

const link = [
	{
		title: 'Главная',
		link: '/'
	},
	{
		title: 'Каталог компаний',
		link: '/'
	},
	{
		title: 'Выставки',
		link: '/'
	},
	{
		title: 'Контакты',
		link: '/'
	}
]

const homeLink = [
	{
		title: 'Заказчику',
		link: '/for-client'
	},
	{
		title: 'Производителю',
		link: '/for-implementer'
	}
]

const Header = () => {
	const pathname = usePathname()
	return (
		<Box
			bg='#F3F4FB'
			p='10px 0'
		>
			<Container maxW={CONTAINER_WIDTH}>
				<Box
					// py='10px'
					borderBottom='solid 1.5px #c1cece'
				>
					<Flex justifyContent='space-between'>
						<Flex gap={6}>
							{link.map((el, index) => (
								<Link
									key={index}
									href={el.link}
									style={{
										// borderBottom:
										// 	pathname === el.link ? 'solid 2px red' : 'none',
										padding: '10px'
									}}
								>
									{el.title}
								</Link>
							))}
						</Flex>
						<Flex
							justifyContent='center'
							alignItems='center'
							gap={2}
						>
							<Text>Регистрация</Text>
							<BsArrowRight />
						</Flex>
					</Flex>
				</Box>

				<Flex
					py='10px'
					justifyContent='space-between'
					alignItems='center'
				>
					<Flex gap={4}>
						<Link href={'/'}>
							<Image
								width={81}
								height={30}
								src={logo}
								alt='logo'
							/>
						</Link>
						<Flex gap={4}>
							{/* //// */}

							<Popover
								trigger='hover'
								placement='bottom-start'
							>
								<PopoverTrigger>
									<Link
										href={association_pages[0].path}
										passHref
									>
										<Flex
											alignItems='center'
											gap={2}
											cursor='pointer'
											as='a'
										>
											<Text>Об ассоциации</Text>
											<IoIosArrowDown />
										</Flex>
									</Link>
								</PopoverTrigger>
								<PopoverContent
									border='1px solid'
									borderColor='gray.200'
									boxShadow='md'
									p={2}
								>
									<PopoverBody>
										<Flex flexDirection='column'>
											{association_pages.map((el, idx) => (
												<Link
													href={el.path}
													key={idx}
												>
													<Description
														p={2}
														borderRadius={10}
														bg={pathname === el.path ? '#F3F4FB' : 'white'}
														fontWeight={pathname === el.path ? 600 : 400}
														color={pathname === el.path ? '#3046BF' : 'black'}
													>
														{el.name}
													</Description>
												</Link>
											))}
										</Flex>
									</PopoverBody>
								</PopoverContent>
							</Popover>

							<Popover
								trigger='hover'
								placement='bottom-start'
							>
								<PopoverTrigger>
									<Link
										href={activity_pages[0].path}
										passHref
									>
										<Flex
											alignItems='center'
											gap={2}
											cursor='pointer'
											as='a'
										>
											<Text>Деятельность</Text>
											<IoIosArrowDown />
										</Flex>
									</Link>
								</PopoverTrigger>
								<PopoverContent
									border='1px solid'
									borderColor='gray.200'
									boxShadow='md'
									p={2}
								>
									<PopoverBody>
										<Flex flexDirection='column'>
											{activity_pages.map((el, idx) => (
												<Link
													href={el.path}
													key={idx}
												>
													<Description
														p={2}
														borderRadius={10}
														bg={pathname === el.path ? '#F3F4FB' : 'white'}
														fontWeight={pathname === el.path ? 600 : 400}
														color={pathname === el.path ? '#3046BF' : 'black'}
													>
														{el.name}
													</Description>
												</Link>
											))}
										</Flex>
									</PopoverBody>
								</PopoverContent>
							</Popover>

							<Popover
								trigger='hover'
								placement='bottom-start'
							>
								<PopoverTrigger>
									<Link
										href={press_center_pages[0].path}
										passHref
									>
										<Flex
											alignItems='center'
											gap={2}
											cursor='pointer'
											as='a'
										>
											<Text>Пресс-центр</Text>
											<IoIosArrowDown />
										</Flex>
									</Link>
								</PopoverTrigger>
								<PopoverContent
									border='1px solid'
									borderColor='gray.200'
									boxShadow='md'
									p={2}
								>
									<PopoverBody>
										<Flex flexDirection='column'>
											{press_center_pages.map((el, idx) => (
												<Link
													href={el.path}
													key={idx}
												>
													<Description
														p={2}
														borderRadius={10}
														bg={pathname === el.path ? '#F3F4FB' : 'white'}
														fontWeight={pathname === el.path ? 600 : 400}
														color={pathname === el.path ? '#3046BF' : 'black'}
													>
														{el.name}
													</Description>
												</Link>
											))}
										</Flex>
									</PopoverBody>
								</PopoverContent>
							</Popover>

							{/* //// */}
						</Flex>
					</Flex>
					<Flex
						gap={4}
						justifyContent='center'
						alignItems='center'
					>
						{homeLink.map((el, index) => (
							<Link
								key={index}
								href={el.link}
							>
								{el.title}
							</Link>
						))}

						<DefButton
							w='100px'
							h='40px'
							bg='#E3484F'
						>
							Войти
						</DefButton>
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

export default Header
