import { Box, Container, Flex } from '@chakra-ui/react'

import DefButton from '@/components/ui/buttons/DefButton'
import Description from '@/components/ui/texts/Description'
import Title from '@/components/ui/texts/Title'

import fon from '@/assets/img/fon1.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const Associations = () => {
	return (
		<Box>
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					 bgImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${fon.src})`}
           bgSize="cover"
           bgPosition="center"
           width="100%"
           height={{ md: '600px', base: '500px' }}
           borderRadius={20}
           flexDirection="column"
           justifyContent="center"
           alignItems="center"
           textAlign="center"
           gap={{ md: 12, base:6 }}
				>
					<Title w={{ md:"100%", base: "90%" }} lineHeight="45px" color="white" fontSize={{ md: 60, base: 36 }}>Присоединяйтесь к Ассоциации</Title>
					<Description lineHeight="26px" w={{ md: 625, base: "100%" }} color="white" fontSize={18}>
						Если у вас есть свободные ресурсы, воспользуйтесь возможностью
						получать новые заказы и загрузить ваше производство на 100%.
					</Description>

					<Flex alignItems="center" w="100%" flexDirection={{ md: "row", base: "column" }} justifyContent="center" gap={{ md: 6, base: 2 }}>
						<DefButton fontSize={16} w={{ md: "360px", base: "90%" }}  h="44px" bg="#E3484F" >Вступить в Ассоциацию</DefButton>
						<DefButton fontSize={16} w={{ md: "360px", base: "90%" }}  h="44px" bg="none" border="solid 2px white">Создать компанию</DefButton>
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

export default Associations
