import { Box, Button, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { VscSettings } from 'react-icons/vsc'

import Description from '@/components/ui/texts/Description'
import Title from '@/components/ui/texts/Title'

import fon from '@/assets/img/fon.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'
import DefButton from '../ui/buttons/DefButton'

const JustComponent = () => {
	return (
		<Box  p="50px 0">
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					color='white'
					w='100%'
					p={{ md: 0, base: '40px 10px' }}
					borderRadius={20}
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
					gap={{ md: 10, base: 6 }}
					bgImage={`url(${fon.src})`}
					bgSize='cover'
					bgPosition='center'
					width='100%'
					height={{ md: 322, base: '100%' }}
				>
					<Title
						w={{ md: '100%', base: '100%' }}
						fontSize={{ md: 34, base: 30 }}
						fontWeight={700}
						lineHeight='50px'
						color='white'
					>
						Присоединиться к Ассоциации легко!
					</Title>
					<Description
						w={{ md: 683, base: '100%' }}
						textAlign='center'
						fontSize={{ md: 18, base: 16 }}
						color='white'
					>
						Свяжитесь с нами по телефону или заполните электронную форму заявки.
						Мы свяжемся с вами в ближайшее время.
					</Description>
					<Flex
						pt={{ md: 0, base: 4 }}
						w='90%'
						justifyContent='center'
						gap={4}
						flexDirection={{ md: 'row', base: 'column' }}
					>
						<DefButton
							w={{ md: 260, base: '100%' }}
              h="44px"
							bg='#E3484F'
							color='white'
							fontSize={16}
							fontWeight={400}
							borderRadius={40}
						>
							Заполнить заявку
						</DefButton>
						<DefButton
							w={{ md: 260, base: '100%' }}
              h="44px"
							bg='none'
							color='white'
							fontSize={16}
							fontWeight={400}
							borderRadius={40}
              border="solid 1px white"
						>
							+996 435 456 789
						</DefButton>
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

export default JustComponent
