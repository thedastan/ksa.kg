import {
	Box,
	ListItem,
	OrderedList,
	Text,
	UnorderedList
} from '@chakra-ui/react'

import Description from '../ui/texts/Description'
import TitleComponent from '../ui/texts/TitleComponent'

const data = [
	{
		bold: 'Комитет по пухо-перьевой продукции',
		description:
			'Мы активно участвуем в разработке и реализации программ, направленных на развитие швейной и легкой промышленности в Кыргызстане. Это включает:',
		list: [
			{
				desc: 'Защиту интересов участников на уровне законодательных и исполнительных органов.'
			},
			{
				desc: 'Организацию общественных экспертиз законодательных актов, программ и других документов, связанных с развитием отрасли.'
			},
			{
				desc: 'Участие в заседаниях и совещаниях на государственном уровне, а также международных форумах и конференциях по вопросам легкой промышленности.'
			}
		]
	},
	{
		bold: 'Информационная поддержка и консультации',
		description:
			'Ассоциация предоставляет своим членам актуальную информацию о состоянии дел в отрасли, в том числе:',
		list: [
			{
				desc: 'Регулярные отчеты и анализ состояния легкой промышленности в Кыргызстане.'
			},
			{
				desc: 'Консультации по внедрению современных технологий в производственные процессы.'
			},
			{
				desc: 'Обобщение и распространение научных исследований и передовых практик в текстильной и швейной отраслях.'
			}
		]
	},
	{
		bold: 'Стимулирование экономического развития и повышение качества продукции',
		description:
			'Ассоциация работает над созданием условий для повышения качества и эффективности производства. В частности:',
		list: [
			{
				desc: 'Разработка единых стандартов качества продукции.'
			},
			{
				desc: 'Мониторинг рынка и борьба с контрафактной продукцией.'
			},
			{
				desc: 'Стимулирование внедрения современных технологий и повышение конкурентоспособности местных производителей.'
			},
			{
				desc: 'Создание экономических условий для поддержки членов Ассоциации.'
			}
		]
	}
]

const ActiveoneComponent = () => {
	return (
		<Box pb={34}>
			<TitleComponent fontSize={{ md: 34, base: 26 }}>
				Деятельность Ассоциации швейников Кыргызстана
			</TitleComponent>

			<Description mt={4}>
				Ассоциация швейников Кыргызстана реализует свою деятельность по
				следующим ключевым направлениям:
			</Description>

			<OrderedList
				mt='40px'
				fontWeight='700'
				gap='10px'
			>
				{data.map((el, idx) => (
					<ListItem
						py={2}
						key={idx}
					>
						<Text
							fontSize={20}
							fontWeight='600'
							mb='8px'
						>
							{el.bold}
						</Text>
						<Description>{el.description}</Description>
						<UnorderedList
							py={2}
							pl={5}
							spacing={2}
						>
							{el.list.map((item, subIdx) => (
								<ListItem key={subIdx}>
									<Text
										fontWeight='400'
										fontSize={16}
									>
										{item.desc}
									</Text>
								</ListItem>
							))}
						</UnorderedList>
					</ListItem>
				))}
				<Description>
				Мы активно работаем на благо всей отрасли и наших участников. Присоединяйтесь к нам и вместе мы сделаем швейную индустрию Кыргызстана сильнее!
				</Description>
			</OrderedList>
		</Box>
	)
}

export default ActiveoneComponent
