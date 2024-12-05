import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

import ava2 from '@/assets/img/diloramkan.jpeg'
import ava3 from '@/assets/img/dinara.jpeg'

import DefButton from '../ui/buttons/DefButton'
import Description from '../ui/texts/Description'
import Title from '../ui/texts/Title'
import TitleComponent from '../ui/texts/TitleComponent'

const data = [
	{
		image: ava2,
		title: 'Дуйшобаева Дилорамкан',
		desc: 'Председатель Ассоциации',
		email: '@dilyaduishobaeva'
	},
	{
		image: ava3,
		title: 'Салиева Динара',
		desc: 'Член наблюдательного совета',
		email: '@dinarasalieva81'
	}
]

const DirectorsComponent = () => {
	return (
		<Box	
		>
			<TitleComponent
			textAlign="center"
				fontSize={{ md: 34, base: 28 }}
				pb={6}
			>
				Правление
			</TitleComponent>
			<Flex
				justifyContent='center'
				alignItems='center'
				flexDirection={{ md: 'row', base: 'column' }}
				gap={8}
			>
				{data.map((el, index) => (
					<Box
					w="100%"
						textAlign='center'
						key={index}
					>
						<Box
							w={{ md: 220, base: '100%' }}
							h={{ md: 284, base: '100%' }}
							overflow='hidden'
						>
							<Image
								style={{ width: '100%', height: '100%', objectFit: 'cover' }}
								src={el.image}
								alt='img'
							/>
						</Box>
						<Title
							mt={2}
							fontWeight={700}
							fontSize={18}
						>
							{el.title}
						</Title>
						<Description>{el.desc}</Description>
						<DefButton
							mt={2}
							fontSize={14}
							fontWeight={400}
							h='42px'
							bg='none'
							border='solid 1px black'
							color='black'
						>
							{el.email}
						</DefButton>
					</Box>
				))}
			</Flex>
		</Box>
	)
}

export default DirectorsComponent
