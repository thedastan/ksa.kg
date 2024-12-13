import { Stack, Text } from '@chakra-ui/react'
import {
	PhoneInput,
	defaultCountries,
	parseCountry
} from 'react-international-phone'
import 'react-international-phone/style.css'

export interface IInputComponentProps {
	name?: string
	placeholder?: string
	value?: string
	handleChange?: (value: string) => void
	required?: boolean
	title?: string
	isLight?: boolean
}

const PhoneInputComponent = ({
	name = 'phone',
	placeholder = 'Номер',
	value,
	handleChange,
	required = true,
	title = 'Номер телефона',
	isLight
}: IInputComponentProps) => {
	const countries = defaultCountries.filter(country => {
		const { iso2 } = parseCountry(country)
		return ['kg'].includes(iso2)
	})
	return (
		<Stack
			spacing='1'
			mb='4'
		>
			<Text
				px='3'
				fontWeight='600'
				fontSize='12px'
				lineHeight='15.65px'
				color='#1C1B1F'
			>
				{title}
			</Text>
			<PhoneInput
				defaultCountry='kg'
				// countries={countries}
				name={name}
				value={value}
				required={required}
				onChange={handleChange}
				className={isLight ? 'phone-input-light' : 'phone-input'}
				placeholder={placeholder}
				autoFocus={false}
			/>
		</Stack>
	)
}

export default PhoneInputComponent
