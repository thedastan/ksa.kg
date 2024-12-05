import { Box, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/react'

import Description from '../ui/texts/Description'
import TitleComponent from '../ui/texts/TitleComponent'

const data = [
	{
		bold: 'Комитет по пухо-перьевой продукции',
		list: [
			{
				desc: 'Председатель: [Имя председателя], email@gmail.com'
			},
			{
				desc: 'Этот комитет занимается вопросами, связанными с производством и реализацией продукции из пуха и пера.'
			}
		]
	},
	{
		bold: 'Комитет по химическим волокнам и текстильной продукции технического назначения',
		list: [
			{
				desc: 'Руководитель: [Имя руководителя], email@gmail.com'
			},
			{
				desc: 'Основной фокус работы комитета — развитие химических волокон и создание текстильных изделий для технических целей.'
			}
		]
	},
	{
		bold: 'Комитет по государственному и муниципальному заказу',
		list: [
			{
				desc: 'Председатель: [Имя председателя], email@gmail.com'
			},
			{
				desc: 'Этот комитет курирует вопросы государственных и муниципальных закупок продукции легкой промышленности.'
			}
		]
	},
	{
		bold: 'Комитет по шерстоперерабатывающей промышленности',
		list: [
			{
				desc: 'Председатель: [Имя председателя], email@gmail.com'
			},
			{
				desc: 'Комитет работает над совершенствованием процессов переработки шерсти и развитием производства шерстяных изделий.'
			}
		]
	},
	{
		bold: 'Комитет по производству и реализации школьной формы ',
		list: [
			{
				desc: 'Руководитель: [Имя руководителя], email@gmail.com'
			},
			{
				desc: 'Занимается вопросами производства школьной формы и обеспечением учеников качественной одеждой.'
			}
		]
	},
	{
		bold: 'Комитет по хлопковому волокну и хлопчатобумажной продукции',
		list: [
			{
				desc: 'Председатель: [Имя председателя], email@gmail.com'
			},
			{
				desc: 'Комитет сосредоточен на вопросах, связанных с производством и реализацией продукции из хлопка.'
			}
		]
	}
]

const CommitteesComponent = () => {
	return (
		<Box pb={34}>
			<TitleComponent fontSize={{ md: 34, base: 26 }}>
				Комитеты и комиссии Ассоциации швейников Кыргызстана
			</TitleComponent>

      <OrderedList mt="40px" fontWeight="700" gap="10px">
        {data.map((el, idx) => (
          <ListItem py={2} key={idx}>
            <Text fontSize={20} fontWeight="600" mb="8px">
              {el.bold}
            </Text>
            <UnorderedList py={2} pl={5} spacing={2}>
              {el.list.map((item, subIdx) => (
                <ListItem key={subIdx}>
                  <Text fontWeight="400" fontSize={16}>{item.desc}</Text>
                </ListItem>
              ))}
            </UnorderedList>
          </ListItem>
        ))}
      </OrderedList>
		</Box>
	)
}

export default CommitteesComponent
