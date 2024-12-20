'use client'

import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	Flex,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Stack,
	Text,
	useDisclosure
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsArrowRight } from 'react-icons/bs'
import { CgMenuRight } from 'react-icons/cg'
import { IoIosArrowDown } from 'react-icons/io'

import ContainerDefault from '@/components/ui/providers/container'
import Description from '@/components/ui/texts/Description'

import logo from '@/assets/img/header-logo.png'

import { HEADER_HEIGHT } from '@/config/_variables.config'
import { ACCESS_PAGES } from '@/config/pages/access-url.config'

import { main_navbar, navbar_menu, role_navbar } from '../data'

import LoginButton from './LoginButton'

const Header = () => {
	const pathname = usePathname()
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<Box
			bg='#F3F4FB'
			h={{ base: '60px', md: HEADER_HEIGHT }}
			position='fixed'
			left='0'
			top='0'
			right='0'
			w='100%'
			zIndex='40'
		>
			<ContainerDefault>
				<Flex
					display={{ base: 'none', md: 'flex' }}
					mt='4'
					justifyContent='space-between'
					alignItems='start'
					borderBottom={{ base: 'none', md: 'solid 1.5px #c1cece' }}
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
									!index
										? pathname === el.link
											? '2px solid #E3484F'
											: 'none'
										: pathname.includes(el.link)
											? '2px solid #E3484F'
											: 'none'
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
						<Flex
							display={{ base: 'none', md: 'flex' }}
							gap='6'
						>
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

					<Button
						aria-label='Open Menu'
						fontSize={30}
						display={{ base: 'block', md: 'none' }}
						onClick={onOpen}
					>
						<CgMenuRight />
					</Button>

					<Flex
						display={{ base: 'none', md: 'flex' }}
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

						<LoginButton />
					</Flex>
				</Flex>
			</ContainerDefault>

			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
			>
				<DrawerOverlay />
				<DrawerContent borderRadius='20px 0 0 20px '>
					<Flex
						p='10px 0'
						justifyContent='end'
					>
						<Button
							bg='none'
							fontSize={26}
							display={{ base: 'block', md: 'none' }}
							onClick={onClose}
						>
							<BsArrowRight />
						</Button>
					</Flex>
					<DrawerBody>
						<Stack spacing={4}>
							{main_navbar.map((el, index) => (
								<Link
									key={index}
									href={el.link}
								>
									<Text
										onClick={onClose}
										fontWeight={pathname === el.link ? 600 : 400}
										color={pathname === el.link ? '#3046BF' : 'black'}
									>
										{el.title}
									</Text>
								</Link>
							))}
							<hr />
							<Flex
								flexDirection='column'
								gap={4}
							>
								{role_navbar.map((el, index) => (
									<Link
										key={index}
										href={el.link}
									>
										<Text
											onClick={onClose}
											color={el.link === pathname ? '#3046BF' : '#12141D'}
										>
											{el.title}
										</Text>
									</Link>
								))}
							</Flex>

							<hr />

							<Flex
								display={{ base: 'flex', md: 'none' }}
								flexDir='column'
								gap='6'
							>
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
														onClick={onClose}
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
															onClick={onClose}
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

								<hr />

								<Link href={ACCESS_PAGES.REGISTER}>
									<Flex
										onClick={onClose}
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
								<Box onClick={onClose}>
									<LoginButton />
								</Box>
							</Flex>
						</Stack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	)
}

export default Header
