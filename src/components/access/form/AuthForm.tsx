'use client'

import { Box, Text } from '@chakra-ui/react'
import { FormEvent, useState } from 'react'
import { toast } from 'sonner'

import Spinner from '@/components/loader/spinner'
import DefButton from '@/components/ui/buttons/DefButton'
import InputComponent from '@/components/ui/inputs/InputComponent'
import PhoneInputComponent from '@/components/ui/inputs/PhoneInputComponent'

import { useLogin } from '@/hooks/useAuth'

import { IAuthForm } from '@/models/auth.model'

const AuthForm = () => {
	const [value, setValue] = useState<IAuthForm>({
		phone: '',
		password: ''
	})

	const { auth, isPending } = useLogin()
	const onsubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (value.phone.length > 9) {
			auth(value)
		} else {
			toast.info('Заполните поле')
		}
	}
	return (
		<Box
			maxW='516px'
			w='100%'
			mx='auto'
		>
			{isPending && <Spinner />}
			<Text
				mb='8'
				fontSize='32px'
				lineHeight='38.73px'
				color='#000000'
				fontWeight='600'
				textAlign='center'
			>
				Войти
			</Text>

			<form onSubmit={onsubmit}>
				<PhoneInputComponent
					handleChange={phone => setValue({ ...value, phone })}
					title='Номер*'
					value={value.phone}
				/>

				<InputComponent
					handleChange={e => setValue({ ...value, password: e.target.value })}
					value={value.password}
					placeholder='Пароль'
					title='Пароль*'
					type='password'
					name='password'
				/>
				<DefButton
					mt='15.5px'
					bg='#3046BF'
					type='submit'
				>
					Далее
				</DefButton>
			</form>
		</Box>
	)
}

export default AuthForm
