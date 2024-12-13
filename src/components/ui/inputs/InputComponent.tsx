'use client'

import {
	Box,
	Input,
	InputGroup,
	InputProps,
	InputRightElement,
	Stack,
	Text
} from '@chakra-ui/react'
import { useState } from 'react'
import { IconType } from 'react-icons/lib'
import { PiEyeClosedFill, PiEyeFill } from 'react-icons/pi'

export interface IInputComponentProps extends InputProps {
	isLight?: boolean
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	required?: boolean
	isReadOnly?: boolean
	RightElement?: IconType
	title?: string
}

const InputComponent = ({
	name,
	placeholder,
	value,
	handleChange,
	isLight,
	isRequired = true,
	type = 'text',
	isReadOnly,
	RightElement,
	title
}: IInputComponentProps) => {
	const [show, setShow] = useState(false)
	return (
		<Stack
			mb='4'
			spacing='1'
		>
			{!!title && (
				<Text
					px='3'
					fontWeight='600'
					fontSize='12px'
					lineHeight='15.65px'
					color='#1C1B1F'
				>
					{title}
				</Text>
			)}
			<InputGroup>
				<Input
					onChange={handleChange}
					variant='none'
					value={value}
					name={name}
					type={show ? 'text' : type}
					rounded='8px'
					placeholder={placeholder}
					h={isLight ? '46px' : '54px'}
					w='100%'
					border='1px solid #ECECEC'
					bg={isLight ? '#FFFFFF' : 'F7F7F7'}
					fontSize='16px'
					px='14px'
					fontWeight='400'
					lineHeight='18.26px'
					color='#1C1B1F'
					_placeholder={{
						opacity: '.5',
						fontSize: '14px'
					}}
					isRequired={isRequired}
					isReadOnly={isReadOnly}
					autoFocus={false}
				/>
				{type === 'password' && (
					<InputRightElement
						w='3rem'
						h='100%'
						display='flex'
						alignItems='center'
					>
						<Box
							onClick={() => setShow(!show)}
							fontSize='24px'
							color='#A8A8A8'
							cursor='pointer'
						>
							{show ? <PiEyeFill /> : <PiEyeClosedFill />}
						</Box>
					</InputRightElement>
				)}

				{!!RightElement && (
					<InputRightElement
						minW='2.7rem'
						h='100%'
						display='flex'
						alignItems='center'
					>
						<RightElement />
					</InputRightElement>
				)}
			</InputGroup>
		</Stack>
	)
}

export default InputComponent
