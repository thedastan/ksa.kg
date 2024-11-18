import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

import DefButton from '@/components/ui/buttons/DefButton'
import Description from '@/components/ui/texts/Description'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import img from '@/assets/img/sliderimg.png'
import users from '@/assets/img/users.png'

const SliderCard3 = () => {
	return (
		<Box
			w='100%'
			bg='#F3F4FB'
			borderRadius={30}
			p={{ md: 10, base: 4 }}
		>
			<Flex
				flexDirection={{ md: 'row', base: 'column' }}
				alignItems='center'
			>
				<Flex
					gap={6}
					w={{ md: '720px', base: '100%' }}
					flexDir='column'
					alignItems='start'
				>
					<TitleComponent
						lineHeight={{ md: '70px', base: '40px' }}
						fontSize={{ md: 60, base: 28 }}
					>
						Новости легкой промышленности Кыргызстана
					</TitleComponent>
					<Flex
						flexDir='column'
						gap={2}
						borderLeft='solid 4px #E3484F'
						pl={4}
						w={{ md: '660px', base: '100%' }}
					>
						<Description>
							Будьте в курсе основных событий и влияний легкой промышленности.
						</Description>
						<Description fontSize={18}>
							итайте полные статьи прямо сейчас!
						</Description>
					</Flex>
					<DefButton
						fontSize={16}
						fontWeight={600}
						bg='#E3484F'
						w={{ md: 258, base: 230 }}
						h={{ md: '48px', base: '40px' }}
					>
						Читать новости
					</DefButton>
				</Flex>
				<Box ml={{ md: -20, base: 0 }} mt={{ md: '0', base: '20px' }}>
					<Flex w={{ md: 262, base: "100%" }} flexDir="column" gap="10px" p={3} bg="white" borderRadius={20}>
						 <Box borderRadius={10} w={{ md: 237, base: "100%" }} h={{ md: 98, base: 118 }} overflow="hidden">
             <Image
							 style={{width: '100%', height: '100%', objectFit:"cover"}}
							src={img}
							alt='img'
						/>
             </Box>
						<Flex flexDir="column" gap="10px">
							<Box w={151} h={13} bg="#EDEDED"></Box>
							<Box w={223} h={13} bg="#EDEDED"></Box>
							<Text
							mt={2}
							color='grey'
							fontSize={11}
							fontWeight={400}
              textAlign="end"

						>
							Сен 22 , 2024
						</Text>
						</Flex>
					</Flex>

          <Flex position={{ md: "absolute", base: "relative" }} ml={{ md: 36, base: 0 }}  mt={{ md: -120, base: 4 }} w={314} flexDir="column" gap="10px" p={3} bg="white" borderRadius={20}>
						 <Box borderRadius={10} w={289} h={118} overflow="hidden">
             <Image
							 style={{width: '100%', height: '100%', objectFit:"cover"}}
							src={img}
							alt='img'
						/>
             </Box>
						<Flex flexDir="column" gap="10px">
							<Box w={223} h={13} bg="#EDEDED"></Box>
							<Box w={151} h={13} bg="#EDEDED"></Box>
							<Text
							mt={2}
							color='grey'
							fontSize={11}
							fontWeight={400}
              textAlign="end"
						>
							Сен 22 , 2024
						</Text>
						</Flex>
					</Flex>

          <Flex mt={{ md: 10, base: 4 }} ml={{ md: 14, base: 0 }} w={{ md: 262, base: "100%" }} flexDir="column" gap="10px" p={3} bg="white" borderRadius={20}>
						 <Box borderRadius={10} w={{ md: 237, base: "100%" }} h={{ md: 98, base: 118 }} overflow="hidden">
             <Image
							 style={{width: '100%', height: '100%', objectFit:"cover"}}
							src={img}
							alt='img'
						/>
             </Box>
						<Flex flexDir="column" gap="10px">
            <Box w={151} h={13} bg="#EDEDED"></Box>
						<Box w={223} h={13} bg="#EDEDED"></Box>
							<Text
							mt={2}
							color='grey'
							fontSize={11}
							fontWeight={400}
              textAlign="end"

						>
							Сен 22 , 2024
						</Text>
						</Flex>
					</Flex>
				</Box>
			</Flex>
		</Box>
	)
}

export default SliderCard3
