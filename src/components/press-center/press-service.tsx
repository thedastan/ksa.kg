'use client'

import { Box, Button, Container, Flex, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import Title from '../ui/texts/Title'
import Description from '../ui/texts/Description'
import TitleComponent from '../ui/texts/TitleComponent'
import Link from 'next/link'

interface IFormTelegram {
	name: string
	message: string
	number: number | string
}

const PressServiceComponent = () => {
	const data = [
		{
			title:
				'Пресс-служба Союза предпринимателей текстильной и легкой промышленности Кыргызстана',
			description: [
				{
					desc: 'Наш Союз действует на принципах информационной прозрачности. Мы активно информируем общественность о ключевых событиях и инициативах в текстильной и легкой промышленности Кыргызстана, предоставляя точную, полную и актуальную информацию о деятельности нашего Союза и его участников.'
				},
				{
					desc: 'В разделе «Пресс-центр» вы найдете оперативные новости о нашей работе: пресс-релизы, анонсы мероприятий, статьи в СМИ, комментарии и интервью с руководителями и членами Союза, а также аналитические и справочные материалы.'
				},
				{
					desc: 'Для запросов на интервью и комментарии обращайтесь на электронную почту: '
				}
			],
			link: 'info@legprom.kg'
		}
	]

	const { register, handleSubmit, reset } = useForm<IFormTelegram>()
	const [phone, setPhone] = useState('')

	const TOKEN = process.env.NEXT_PUBLIC_TG_TOKEN
	const CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID

	const messageModel = (data: IFormTelegram) => {
		let messageTG = `Name: <b>${data.name}</b>\n`
		messageTG += `Number: <b>${data.number}</b>\n`
		return messageTG
	}

	const onSubmit: SubmitHandler<IFormTelegram> = async data => {
		try {
			await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
				chat_id: CHAT_ID,
				parse_mode: 'html',
				text: messageModel(data)
			})
			reset()
			setPhone('')
			toast.success('Заявка успешно отправлена!', {
				position: 'top-right',
				autoClose: 3000
			})
		} catch (err) {
			toast.error('Ошибка при отправке сообщения!', {
				position: 'top-right',
				autoClose: 3000
			})
		}
	}

	return (
		<Box p={0}>
			<Container maxW={CONTAINER_WIDTH}>
				<Box>

					<Box>
						{data.map((el,index) => (
							<Box key={index}>
								<TitleComponent pb={4} textAlign="start" fontSize={{ md: 32, base: 26 }} fontWeight={700}>{el.title}</TitleComponent>
								 {el.description.map((el,index) => (
									<Description mt={2} key={index}>{el.desc}</Description>
								 ))}
								 <Link href={"/"} target={"_blank"} style={{color:"#3046BF"}}>info@legprom.kg</Link>
							</Box>
						))}
					</Box>
					 

					<Box bg="#F7F7F7" p={{ md: 10, base: 4 }} mt={10} borderRadius={20}>
					<Title fontSize={{ md: 32, base: 22 }} py={{ md: 0, base: 6 }} fontWeight={700}>Свяжитесь с нами!</Title>
						<form onSubmit={handleSubmit(onSubmit)}>
						 <Flex w="100%" alignItems='center'
								justifyContent='center'>
						 <Flex
								flexDirection='column'
								gap={4}
								w={{ md: 335, base: "100%" }}
								alignItems='center'
								justifyContent='center'
								
							>
								<Flex
								w={{ md: "335px", base: "100%" }}
									justifyContent='center'
									flexDirection='column'
									alignItems='start'
									gap={1}
									mt={6}
								>
									<Text
											mt={-2}
											ml={4}
											fontSize={12}
											fontWeight={600}
											minWidth='100px'
									>
										Номер*
									</Text>
									<PhoneInput
										defaultCountry='kg'
										className='press_service'
										{...register('number', { required: true })}
										value={phone}
										onChange={phone => setPhone(phone)}
									/>
								</Flex>

								<Flex
									justifyContent='center'
									flexDirection='column'
									alignItems='start'
									gap={1}
									mt={-1}
								>
									<Text
										mt={-2}
										ml={4}
										fontSize={12}
										fontWeight={600}
										minWidth='100px'
									>
										Имя*
									</Text>
									<Input
										{...register('message', { required: true })}
										fontSize={16}
										fontWeight={400}
										bg="white"
										w={{ md: 335, base: "100%" }}
										h='46px'
										padding='10px 20px'
										borderRadius={8}
										type='text'
										placeholder='Ваше имя'
									/>
								</Flex>

								<Flex
									justifyContent='center'
									flexDirection='column'
									alignItems='start'
									gap={1}
									mt={2}

								>
									<Text
										mt={-2}
										ml={4}
										fontSize={12}
										fontWeight={600}
										minWidth='100px'
									>
										Сообщение*
									</Text>
									<Input
										{...register('message', { required: true })}
										fontSize={16}
										fontWeight={400}
										bg="white"
										w={{ md: 335, base: "100%" }}
										h='46px'
										padding='10px 20px'
										borderRadius={8}
										type='text'
										placeholder='Введите название'
									/>
								</Flex>

								{/* Submit Button */}
								<Button
									type='submit'
									mt={{ base: 2, md: 3 }}
									w={{ md: 335, base: "100%" }}
									h='46px'
									borderRadius={32}
									bg='#3046BF'
									color='white'
								>
									Отправить
								</Button>
							</Flex>
						 </Flex>
						</form>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default PressServiceComponent
