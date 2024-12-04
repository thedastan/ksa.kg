'use client'

import { Box, Flex, List, ListItem, Radio, Text } from '@chakra-ui/react'
import { useState } from 'react'

import DefButton from '@/components/ui/buttons/DefButton'
import InputComponent from '@/components/ui/inputs/InputComponent'
import PhoneInputComponent from '@/components/ui/inputs/PhoneInputComponent'

import { EnumUserRole, RoleTypes } from '@/models/user.model'

const RegisterForm = (props: { inModal?: boolean }) => {
	const [value, setValue] = useState({
		phone: '',
		email: '',
		role: EnumUserRole.SUPERADMIN
	})

	const setRole = (role: RoleTypes) => {
		setValue({ ...value, role })
	}

	return (
		<Box
			mx='auto'
			maxW='420px'
			w='100%'
		>
			<Text
				mb='8'
				fontSize='32px'
				lineHeight='38.73px'
				color='#000000'
				fontWeight='600'
				textAlign='center'
			>
				Заполните данные
			</Text>

			<RadioCard
				onClick={() => setRole(EnumUserRole.CUSTOMER)}
				title='Я — заказчик'
				description='Хочу размещать заказы на пошив'
				isActive={value.role === EnumUserRole.CUSTOMER}
			/>

			<RadioCard
				onClick={() => setRole(EnumUserRole.MANUFACTURER)}
				title='Я — швейное производство'
				description={[
					'швейное производство',
					'поставщик сырья',
					'фурнитуры',
					'оборудования'
				]}
				isActive={value.role === EnumUserRole.MANUFACTURER}
			/>

			<PhoneInputComponent
				handleChange={phone => setValue({ ...value, phone })}
				title='Номер*'
				value={value.phone}
			/>

			<InputComponent
				handleChange={e => setValue({ ...value, email: e.target.value })}
				value={value.email}
				placeholder='aliya@gmail.com'
				title='Почта*'
				type='email'
			/>

			<DefButton
				mt='15.5px'
				bg='#3046BF'
			>
				Далее
			</DefButton>
		</Box>
	)
}

interface RadioCardProps {
	title: string
	description: string | string[]
	isActive: boolean
	onClick: () => void
}
function RadioCard(props: RadioCardProps) {
	return (
		<Flex
			onClick={props.onClick}
			mb='4'
			px='18px'
			py='14px'
			rounded='12px'
			cursor='pointer'
			bg='#F7F7F7'
			border={`1px solid ${props.isActive ? '#3046BF' : '#D8E0F0'}`}
			gap='5'
		>
			<Flex
				justifyContent='center'
				alignItems='center'
				w='33px'
				h='33px'
				rounded='50%'
				bg={props.isActive ? '#5D5FEF1F' : '#A4A4A41F'}
				margin='3.33px'
			>
				<Radio
					isChecked={props.isActive}
					border='2.4px solid #A4A4A4'
				/>
			</Flex>

			<Box pb='1'>
				<Text
					color='#242331'
					fontSize='18px'
					lineHeight='18px'
					fontWeight='600'
					py='11px'
				>
					{props.title}
				</Text>

				{typeof props.description === 'object' ? (
					<List
						styleType='disc'
						pl='5'
					>
						{props.description?.map((item, idx) => (
							<ListItem key={idx}>
								<Text
									color='#1C1B1F'
									fontSize='14px'
									lineHeight='18px'
									fontWeight='400'
								>
									{item}
								</Text>
							</ListItem>
						))}
					</List>
				) : (
					<Text
						mt='5px'
						color='#1C1B1F'
						fontSize='14px'
						lineHeight='18px'
						fontWeight='400'
					>
						{props.description}
					</Text>
				)}
			</Box>
		</Flex>
	)
}

export default RegisterForm
