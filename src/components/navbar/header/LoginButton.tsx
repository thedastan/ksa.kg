import { Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiUser } from 'react-icons/hi2'

import DefButton from '@/components/ui/buttons/DefButton'

import { ACCESS_PAGES } from '@/config/pages/access-url.config'
import { USER_PAGES } from '@/config/pages/private-url.config'

import { useAuthed } from '@/services/auth-token.services'

const LoginButton = () => {
	const [inClient, setClient] = useState(false)
	const isAuth = useAuthed()

	useEffect(() => {
		setClient(true)
	}, [])
	if (!inClient) return null
	return isAuth ? (
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
				Личный кабинет
			</Flex>
		</Link>
	) : (
		<Link href={ACCESS_PAGES.AUTH}>
			<DefButton
				w='100px'
				h='40px'
				bg='#E3484F'
			>
				Войти
			</DefButton>
		</Link>
	)
}

export default LoginButton
