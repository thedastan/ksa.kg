import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

import DefButton from '@/components/ui/buttons/DefButton'
import Description from '@/components/ui/texts/Description'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import img from '@/assets/img/sliderimg.png'
 

import img1 from '@/assets/img/cardhome2.png'
import img2 from '@/assets/img/cardhome3.png'
import img3 from '@/assets/img/cardhome.png'



const SliderCard3 = () => {
	return (
		<Box
			w='100%'
			h={{ md: "570px", base:"100%" }}
			bg='#F3F4FB'
			borderRadius={30}
			p={{ md: 10, base: 4 }}
			mt={{ md: 0, base: 10 }}
		>
			<Flex
				flexDirection={{ md: 'row', base: "column-reverse" }}
				alignItems='center'
				justifyContent="center"

			>
				<Flex
					gap={6}
					w={{ md: '720px', base: '100%' }}
					flexDir='column'
					alignItems='start'
				>
					<TitleComponent
					display={{ md: "flex", base:"none" }}
						lineHeight={{ md: '70px', base: '31px' }}
						fontSize={{ md: 60, base: 22 }}
					>
						Новости легкой промышленности Кыргызстана
					</TitleComponent>
					<Flex
						flexDir='column'
						gap={2}
						borderLeft='solid 4px #E3484F'
						pl={4}
						w={{ md: '660px', base: '100%' }}
						mt={{ md: 0, base: 6 }}
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
						w={{ md: 258, base: "100%" }}
						h={{ md: '48px', base: '48px' }}
					>
						Читать новости
					</DefButton>
				</Flex>
				<Box ml={{ md: -20, base: 0 }} mt={{ md: '0', base: '20px' }}>
				<TitleComponent
					display={{ md: "none", base:"block" }}
						lineHeight={{ md: '70px', base: '30px' }}
						fontSize={{ md: 60, base: 22 }}
						pb={6}
					>
						Новости легкой промышленности Кыргызстана
					</TitleComponent>
					<Flex w={{ md: 262, base: 262 }} flexDir="column" gap="10px" p={3} bg="white" borderRadius={20}>
					 
						 <Box borderRadius={10} w={{ md: 237, base: 237 }} h={{ md: 98, base: 98 }} overflow="hidden">
             <Image
							 style={{width: '100%', height: '100%', objectFit:"cover"}}
							src={img1}
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

          <Flex position={{ md: "absolute", base: "absolute" }} ml={{ md: 36, base: 20 }}  mt={{ md: -120, base: -120 }} w={{ md: 314, base: 237 }} flexDir="column" gap="10px" p={3} bg="white" borderRadius={20}>
						 <Box borderRadius={10} w={{ md: 289, base: 214 }} h={{ md: 118, base: 98 }} overflow="hidden">
             <Image
							 style={{width: '100%', height: '100%', objectFit:"cover"}}
							src={img2}
							alt='img'
						/>
             </Box>
						<Flex flexDir="column" gap="10px">
							<Box w={{ md: 223, base: 214 }} h={13} bg="#EDEDED"></Box>
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

          <Flex mt={{ md: 10, base: 10 }} ml={{ md: 14, base: 0 }} w={{ md: 262, base: 262}} flexDir="column" gap="10px" p={3} bg="white" borderRadius={20}>
						 <Box borderRadius={10} w={{ md: 237, base: 237 }} h={{ md: 98, base: 98 }} overflow="hidden">
             <Image
							 style={{width: '100%', height: '100%', objectFit:"cover"}}
							src={img3}
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
