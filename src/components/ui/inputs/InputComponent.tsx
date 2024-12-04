'use client'

import {
	Box,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Text
} from '@chakra-ui/react'
import { useState } from 'react'
import { PiEyeClosedFill, PiEyeFill } from 'react-icons/pi'

export interface IInputComponentProps {
	name?: string
	placeholder?: string
	isLight?: boolean
	type?: string
	value?: string
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	required?: boolean
	isReadOnly?: boolean
	RightElement?: JSX.Element
	title?: string
}

const InputComponent = ({
	name,
	placeholder,
	value,
	handleChange,
	isLight,
	type = 'text',
	required = true,
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
					h='54px'
					w='100%'
					border='1px solid #ECECEC'
					bg='#F7F7F7'
					fontSize='16px'
					px='14px'
					fontWeight='400'
					lineHeight='18.26px'
					color='#1C1B1F'
					_placeholder={{
						opacity: '.5'
					}}
					isRequired={required}
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
						minW='3rem'
						h='100%'
						display='flex'
						alignItems='center'
						opacity={!!value ? '1' : '.5'}
					>
						<Box>{RightElement}</Box>
					</InputRightElement>
				)}
			</InputGroup>
		</Stack>
	)
}

export default InputComponent
