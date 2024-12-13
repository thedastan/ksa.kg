'use client'

import {
	Box,
	Divider,
	Flex,
	Progress,
	Stack,
	Text,
	useDisclosure
} from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaChevronRight } from 'react-icons/fa6'

import ModalComponent from '@/components/ui/modal/ModalComponent'

import MenuCompanyIcon from '@/assets/svg/MenuCompanyIcon'
import MenuFavoritesIcon from '@/assets/svg/MenuFavoritesIcon'
import MenuLogoutIcon from '@/assets/svg/MenuLogoutIcon'
import MenuNotificationIcon from '@/assets/svg/MenuNotificationIcon'
import MenuTariffsIcon from '@/assets/svg/MenuTariffsIcon'
import MenuUserIcon from '@/assets/svg/MenuUserIcon'

import { USER_PAGES } from '@/config/pages/private-url.config'

import { removeFromStorage } from '@/services/auth-token.services'

const AccountNavbar = () => {
	return (
		<Flex
			flexDirection='column'
			justifyContent='space-between'
			minW='232px'
			minH='590px'
			rounded='14px'
			bg='#F7F7F7'
			overflow='hidden'
		>
			<Box>
				<Box
					borderBottom='1px solid #DEDEDE'
					px='22px'
					py='15px'
				>
					<Text
						color='#202223'
						fontSize='14px'
						lineHeight='20px'
						fontWeight='400'
						opacity='.5'
					>
						Производитель
					</Text>
				</Box>

				<Stack
					mt='10px'
					spacing='10px'
				>
					<MenuCard
						icon={MenuUserIcon}
						name='Профиль'
						path={USER_PAGES.PROFILE}
					/>
					<MenuCard
						icon={MenuCompanyIcon}
						name='Мои компании'
						path={USER_PAGES.MY_COMPANIES}
					/>
					{/* <MenuCard
						icon={MenuCompanyIcon}
						name='Мои заказы'
						path={USER_PAGES.MY_ORDERS}
					/> */}
					<MenuCard
						icon={MenuFavoritesIcon}
						name='Избранные'
						path={USER_PAGES.FAVORITES}
					/>
					<MenuCard
						icon={MenuNotificationIcon}
						name='Уведомления'
						path={USER_PAGES.NOTIFICATION}
					/>
					<Divider
						w='100%'
						h='1px'
						bg='#DEDEDE'
					/>
					{/* <MenuCard
					icon={MenuTariffsIcon}
					name='Тарифы'
					path={USER_PAGES.TARIFFS}
					isNonstandard={true}
				/>
				<Divider
					w='100%'
					h='1px'
					bg='#DEDEDE'
				/> */}
					<MenuLogoutButton />
					<Divider
						w='100%'
						h='1px'
						bg='#DEDEDE'
					/>
				</Stack>
			</Box>

			<Box>
				<Box
					px='3'
					bg='#12254D05'
					py='3'
					mb='4'
				>
					<Text
						fontWeight='500'
						fontSize='14px'
						lineHeight='18px'
						color='#12141D'
					>
						Информации заполнено
					</Text>
					<Flex
						alignItems='center'
						gap='2px'
						mt='1px'
					>
						<Progress
							color='#3046BF'
							h='8px'
							value={20}
							w='178px'
							rounded='13px'
							bg='#E3E3E3'
						/>
						<Text
							fontWeight='500'
							fontSize='11px'
							lineHeight='18px'
							color='#12141D'
							opacity='.5'
						>
							20%
						</Text>
					</Flex>
				</Box>

				{/* <CreateButton path={USER_PAGES.PLACE_AN_ORDER}>
					Разместить заказ
				</CreateButton> */}
				<CreateButton path={USER_PAGES.CREATE_COMPANY}>
					Создать компанию
				</CreateButton>
			</Box>
		</Flex>
	)
}

interface MenuCardProps {
	path: string
	icon: () => JSX.Element
	name: string
	isNonstandard?: boolean
}
function MenuCard(props: MenuCardProps) {
	const pathname = usePathname()
	const isActive = pathname === props.path
	return (
		<Link href={props.path}>
			<Flex
				h='30px'
				gap='5px'
			>
				<Box
					bg={isActive ? '#3046BF' : 'transparent'}
					h='100%'
					w='3px'
					borderTopRightRadius='4px'
					borderBottomRightRadius='4px'
				/>
				<Flex
					rounded='4px'
					bg={isActive ? '#EDEEEF' : 'transparent'}
					_hover={{ bg: '#EDEEEF' }}
					px={!props.isNonstandard ? '14px' : '3'}
					alignItems='center'
					gap={!props.isNonstandard ? '6px' : '2'}
					maxW='100%'
					w='100%'
				>
					<span className={isActive ? 'user-menu-active' : ''}>
						<props.icon />
					</span>
					<Text
						color={isActive ? '#3046BF' : '#202223'}
						fontWeight='500'
						fontSize='14px'
						lineHeight='20px'
					>
						{props.name}
					</Text>
				</Flex>
			</Flex>
		</Link>
	)
}

function CreateButton(props: { path: string; children: string }) {
	const pathname = usePathname()
	const isActive = pathname === props.path
	return (
		<Link href={props.path}>
			<Flex
				justifyContent='space-between'
				alignItems='center'
				h='62px'
				transition='.2s'
				_hover={{ bg: '#3046BF', color: '#FFFFFF' }}
				bg={isActive ? '#3046BF' : '#E3E3E3'}
				color={isActive ? '#FFFFFF' : '#12141D'}
				px='4'
				_active={{ opacity: '.8' }}
				gap='2px'
			>
				<Text
					fontWeight='500'
					fontSize='14px'
					lineHeight='30px'
				>
					{props.children}
				</Text>

				<FaChevronRight fontSize='12px' />
			</Flex>
		</Link>
	)
}

function MenuLogoutButton() {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const logout = () => {
		removeFromStorage()
		window.location.reload()
	}
	return (
		<Flex
			onClick={onOpen}
			h='30px'
			gap='5px'
			cursor='pointer'
		>
			<Box w='3px' />
			<Flex
				rounded='4px'
				px='3'
				alignItems='center'
				gap='2'
				maxW='100%'
				w='100%'
				_hover={{ bg: '#EDEEEF' }}
			>
				<MenuLogoutIcon />
				<Text
					color='#E4161F'
					fontWeight='500'
					fontSize='14px'
					lineHeight='20px'
				>
					Выйти
				</Text>
			</Flex>

			<ModalComponent
				isOpen={isOpen}
				onClose={onClose}
				onSubmit={logout}
				title='Вы уверены, что хотите выйти?'
			/>
		</Flex>
	)
}

export default AccountNavbar
