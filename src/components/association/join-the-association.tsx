import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

import Description from '../ui/texts/Description'
import TitleComponent from '../ui/texts/TitleComponent'

const data = [
	{
		desc: 'Доступ к закрытым аналитическим данным и актуальной статистической информации о швейной и легкой промышленности.'
	},
	{
		desc: 'Возможность бесплатного участия в обучающих курсах, мастер-классах и тренингах, а также на льготных условиях.'
	},
	{
		desc: 'Бесплатные консультации специалистов отрасли.'
	},
	{
		desc: 'Участие в специальных акциях и предложениях от компаний-партнеров.'
	},
	{
		desc: 'Участие в рабочих встречах с представителями государственных и региональных органов власти.'
	}
]

const JoinTheAssociationComponent = () => {
	return (
		<Box pb={34}>
			<TitleComponent fontSize={{ md: 34, base: 28 }}>
				Вступить в Ассоциацию швейников Кыргызстана
			</TitleComponent>
			<Description mt='14px'>
				Присоединившись к Ассоциации швейников Кыргызстана, вы получаете
				множество преимуществ:
			</Description>

			<UnorderedList mt={1} gap='10px'>
				{data.map((el, idx) => (
					<ListItem   ml={2} py={1} key={idx}>
						<Text
							fontSize={16}
							lineHeight='30px'
						>
							 
							{el.desc}
						</Text>
					</ListItem>
				))}
			</UnorderedList>
		</Box>
	)
}

export default JoinTheAssociationComponent
