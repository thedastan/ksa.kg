import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { BiLogoInstagramAlt } from 'react-icons/bi'
import { FaTelegramPlane } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import { RiWhatsappFill } from 'react-icons/ri'
import { SiTiktok } from 'react-icons/si'

import Description from '@/components/ui/texts/Description'
import Title from '@/components/ui/texts/Title'

import { LOCATION, LOCATION_LINK } from '@/constants/admin'

import footercard1 from '@/assets/img/footercard1.png'
import footercard2 from '@/assets/img/footercard2.png'
import footercard3 from '@/assets/img/footercard3.png'
import footercard4 from '@/assets/img/footercard4.png'
import logo from '@/assets/img/footerlogo.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { association_pages } from '@/app/association/data'
import { activity_pages } from '@/app/activity/data'
import { press_center_pages } from '@/app/press-center/data'

const link = [
	{
		name: 'Заказчику',
		path: '/for-client'
	},
	{
		name: 'Производителю',
		path: '/for-implementer'
	},
	{
		name: 'Каталог компаний',
		path: '/'
	},
	{
		name: 'Выставки',
		path: '/'
	},
	{
		name: 'Контакты',
		path: '/'
	}
]

const Footer = () => {
	return (
		<>
			<Box
				mt={10}
				bg='#12141D'
				p={8}
			>
				<Container maxW={CONTAINER_WIDTH}>
					<Flex
						justifyContent='space-between'
						color='white'
						pb={4}
					>
						<Flex
							flexDir='column'
							alignItems={{ md: "start", base: "center" }}
							textAlign={{ md: "start", base: "center" }}
							gap={6}
						>
							<Image
								style={{ width: '113px', height: '42px' }}
								src={logo}
								alt=''
							/>
							<Title
								fontSize='24px'
								textAlign='start'
								color='white'
								lineHeight='29px'
								w={300}
							>
								Платформа для поиска швейных производств
							</Title>

							<Flex
								gap={4}
								alignItems='center'
							>
								<Box
									bg='#303030'
									color='white'
									borderRadius={50}
									p={2}
									fontSize={24}
								>
									<BiLogoInstagramAlt />
								</Box>
								<Box
									bg='#303030'
									color='white'
									borderRadius={50}
									p={2}
									fontSize={24}
								>
									<SiTiktok />
								</Box>
								<Box
									bg='#303030'
									color='white'
									borderRadius={50}
									p={2}
									fontSize={24}
								>
									<FaTelegramPlane />
								</Box>
								<Box
									bg='#303030'
									color='white'
									borderRadius={50}
									p={2}
									fontSize={24}
								>
									<RiWhatsappFill />
								</Box>
								<Box
									bg='#303030'
									color='white'
									borderRadius={50}
									p={2}
									fontSize={24}
								>
									<IoLogoYoutube />
								</Box>
							</Flex>

							<Text w='300px'>
								<Link href={LOCATION_LINK} target={"_blank"}>
								 <span style={{borderBottom:"solid 1px white"}}>	{LOCATION},1111</span> этаж Ленинский район, Бишкек
								</Link>
							</Text>
						</Flex>

						<Box  display={{ md: "flex", base: "none" }} gap={10}>
							<Flex flexDirection='column'>
								<Text
									color='grey'
									pb={4}
									fontSize={14}
								>
									Ресурсы
								</Text>
								{link.map((el, idx) => (
									<Link
										href={el.path}
										key={idx}
									>
										<Description
											fontSize={14}
											p={1}
											borderRadius={10}
											color='white'
										>
											{el.name}
										</Description>
									</Link>
								))}
							</Flex>

							<Flex flexDirection='column'>
								<Text
									fontSize={14}
									color='grey'
									pb={4}
								>
									Об ассоциации
								</Text>
								{association_pages.map((el, idx) => (
									<Link
										href={el.path}
										key={idx}
									>
										<Description
											p={1}
											borderRadius={10}
											color='white'
											fontSize={14}
										>
											{el.name}
										</Description>
									</Link>
								))}
							</Flex>

							<Flex flexDirection='column'>
								<Text
									fontSize={14}
									color='grey'
									pb={4}
								>
									Деятельность
								</Text>
								{activity_pages.map((el, idx) => (
									<Link
										href={el.path}
										key={idx}
									>
										<Description
										w="180px"
											p={1}
											borderRadius={10}
											color='white'
											fontSize={14}
										>
											{el.name}
										</Description>
									</Link>
								))}
							</Flex>

							<Flex flexDirection='column'>
								<Text
									fontSize={14}
									color='grey'
									pb={4}
								>
									Пресс-центр
								</Text>
								{press_center_pages.map((el, idx) => (
									<Link
										href={el.path}
										key={idx}
									>
										<Description
											p={1}
											borderRadius={10}
											color='white'
											fontSize={14}
										>
											{el.name}
										</Description>
									</Link>
								))}
							</Flex>
						</Box>
					</Flex>
				</Container>
			</Box>
			<Flex
				h={{ md: "44px", base: '100%' }}
				alignItems='center'
				bg='#3046BF'
			>
				<Container maxW={CONTAINER_WIDTH}>
					<Flex py={{ md: "0", base: 8 }} gap={{ md: 0, base: 4 }} flexDir={{ md: "row", base: "column" }} justifyContent="space-between" alignItems='center'>
						<Flex flexDir={{ md: "row", base: "column" }} gap={{ md: 8, base: 4 }}  color="white" alignItems='center'>
							<Text
								fontSize={12}
								fontWeight={400}
							>
								<Link href={'/'}>ОЮЛ "Ассоциация кыргызских швейников"</Link>
							</Text>
							<Text
								fontSize={12}
								fontWeight={400}
							>
								<Link href={'/'}>ИНН: 00812202310210</Link>
							</Text>
							<Text
								fontSize={12}
								fontWeight={400}
							>
								<Link href={'/'}>Разработал Motion Web LLC</Link>
							</Text>
						</Flex>
						<Flex
							alignItems='center'
							gap={4}
						>
							<Image
								style={{ width: '37px', height: '100%' }}
								src={footercard1}
								alt='footercard1'
							/>
							<Image
								style={{ width: '37px', height: '100%' }}
								src={footercard2}
								alt='footercard2'
							/>
							<Image
								style={{ width: '37px', height: '100%' }}
								src={footercard3}
								alt='footercard3'
							/>
							<Image
								style={{ width: '37px', height: '100%' }}
								src={footercard4}
								alt='footercard4'
							/>
						</Flex>
					</Flex>
				</Container>
			</Flex>
		</>
	)
}

export default Footer
