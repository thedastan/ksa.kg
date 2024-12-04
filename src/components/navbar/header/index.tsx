'use client'

import {
	Box,
	Flex,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Stack,
	Text
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsArrowRight } from 'react-icons/bs'
import { HiUser } from 'react-icons/hi2'
import { IoIosArrowDown } from 'react-icons/io'

import DefButton from '@/components/ui/buttons/DefButton'
import ContainerDefault from '@/components/ui/providers/container'
import Description from '@/components/ui/texts/Description'

import logo from '@/assets/img/logo.png'

import { HEADER_HEIGHT } from '@/config/_variables.config'
import { ACCESS_PAGES } from '@/config/pages/access-url.config'
import { USER_PAGES } from '@/config/pages/private-url.config'

import { main_navbar, navbar_menu, role_navbar } from '../data'

const Header = () => {
	const pathname = usePathname()
	return (
		<Box
			bg='#F3F4FB'
			h={HEADER_HEIGHT}
			position='fixed'
			left='0'
			top='0'
			right='0'
			w='100%'
			zIndex='40'
		>
			<ContainerDefault>
				<Flex
					mt='4'
					justifyContent='space-between'
					alignItems='start'
					borderBottom='solid 1.5px #c1cece'
					h='26px'
				>
					<Flex
						gap={6}
						fontWeight='400'
						fontSize='12px'
						lineHeight='13px'
						h='100%'
					>
						{main_navbar.map((el, index) => (
							<Box
								key={index}
								h='100%'
								borderBottom={
									pathname === el.link ? '2px solid #E3484F' : 'none'
								}
							>
								<Link href={el.link}>{el.title}</Link>
							</Box>
						))}
					</Flex>
					<Link href={ACCESS_PAGES.REGISTER}>
						<Flex
							alignItems='center'
							gap={2}
						>
							<Text
								fontWeight='400'
								fontSize='12px'
								lineHeight='13px'
							>
								Регистрация
							</Text>
							<BsArrowRight />
						</Flex>
					</Link>
				</Flex>

				<Flex
					py='10px'
					justifyContent='space-between'
					alignItems='center'
				>
					<Flex
						gap='8'
						alignItems='center'
					>
						<Link href={'/'}>
							<Image
								width={81}
								height={30}
								src={logo}
								alt='logo'
							/>
						</Link>
						<Flex gap='6'>
							{navbar_menu.map((el, idx) => (
								<Popover
									key={idx}
									trigger='hover'
									placement='bottom-start'
								>
									<PopoverTrigger>
										<Link href={el.list[0].path}>
											<Flex
												alignItems='center'
												gap={2}
												cursor='pointer'
											>
												<Text
													fontWeight='400'
													fontSize='14px'
													lineHeight='16px'
													color='#12141D'
												>
													{el.title}
												</Text>
												<IoIosArrowDown />
											</Flex>
										</Link>
									</PopoverTrigger>
									<PopoverContent
										border='1px solid'
										borderColor='gray.200'
										rounded='10px'
										p={2}
									>
										<Stack
											spacing='2px'
											w='100%'
										>
											{el.list.map((nav, index) => (
												<Link
													href={nav.path}
													key={index}
												>
													<Box
														_hover={{ bg: '#F3F4FB' }}
														borderRadius='8px'
														bg={pathname === nav.path ? '#F3F4FB' : 'white'}
														w='100%'
														px='2'
														py='6px'
													>
														<Description
															fontWeight={pathname === nav.path ? 600 : 400}
															color={
																pathname === nav.path ? '#3046BF' : 'black'
															}
														>
															{nav.name}
														</Description>
													</Box>
												</Link>
											))}
										</Stack>
									</PopoverContent>
								</Popover>
							))}
						</Flex>
					</Flex>
					<Flex
						gap={4}
						justifyContent='center'
						alignItems='center'
						fontSize='14px'
						fontWeight='500'
						lineHeight='24px'
					>
						{role_navbar.map((el, index) => (
							<Link
								key={index}
								href={el.link}
							>
								<Text color={el.link === pathname ? '#3046BF' : '#12141D'}>
									{el.title}
								</Text>
							</Link>
						))}
						{/* <DefButton
							w='100px'
							h='40px'
							bg='#E3484F'
						>
							Войти
						</DefButton> */}
						<Link href={USER_PAGES.MY_COMPANIES}>
							<Flex
								alignItems='center'
								gap='1'
								minW='100px'
								h='40px'
								bg='#E3484F'
								fontSize='14px'
								fontWeight='400'
								lineHeight='16.1px'
								color='#FFFFFF'
								rounded='100px'
								px='4'
							>
								<HiUser />
								John Doe
							</Flex>
						</Link>
					</Flex>
				</Flex>
			</ContainerDefault>
		</Box>
	)
}

export default Header
