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
		bold: 'Участие в стратегическом развитии отрасли:',
		list: [
			{
				desc: 'Содействие в решении ключевых задач по развитию текстильной и легкой промышленности в Кыргызстане;'
			},
			{
				desc: 'Разработка и реализация национальных проектов, направленных на модернизацию швейного производства и продвижение продукции на внешние рынки;'
			},
			{
				desc: 'Внедрение новых технологий и повышение конкурентоспособности товаров под брендом «Сделано в Кыргызстане».'
			}
		]
	},
	{
		bold: 'Создание благоприятной инвестиционной среды:',
		list: [
			{
				desc: 'Разработка предложений для привлечения инвестиций в отрасль, включая налоговые льготы для бизнеса, инвестирующего в основные фонды;'
			},
			{
				desc: 'Повышение доступности финансовых и государственных мер поддержки для предприятий легкой промышленности.'
			}
		]
	},
	{
		bold: 'Развитие кооперации и сотрудничества:',
		list: [
			{
				desc: 'Поддержка взаимного обмена опытом и бизнес-миссий среди участников отрасли;'
			},
			{
				desc: 'Содействие в установлении партнерских отношений с региональными и международными рынками, в том числе с Республикой Узбекистан, Казахстаном и другими странами ЕАЭС.'
			}
		]
	},
	{
		bold: 'Поддержка подготовки кадров:',
		list: [
			{
				desc: 'Укрепление взаимодействия между образовательными учреждениями и предприятиями легкой промышленности для обеспечения устойчивого потока квалифицированных специалистов;'
			},
			{
				desc: 'Содействие в развитии учебных программ, направленных на подготовку кадров для нужд текстильной отрасли.'
			}
		]
	},
	{
		bold: 'Организация информационной поддержки:',
		list: [
			{
				desc: 'Информационная поддержка членов ассоциации, включая мониторинг изменений в законодательстве, государственных программах и экономической ситуации;'
			},
			{
				desc: 'Создание единой информационной системы для предприятий, с актуальными данными о состоянии рынка, сырье, стандартах качества и других важных показателях.'
			}
		]
	},
	{
		bold: 'Выставочная и рекламная деятельность:',
		list: [
			{
				desc: 'Организация и участие в отраслевых выставках и форумах для продвижения кыргызских товаров как на внутреннем, так и на международных рынках;'
			},
			{
				desc: 'Поддержка молодых дизайнеров и сотрудничество с fashion-индустрией для расширения ассортимента и повышения узнаваемости продукции.'
			}
		]
	},
	{
		bold: 'Развитие стандартов и контроля качества:',
		list: [
			{
				desc: 'Разработка и утверждение единых стандартов качества для продукции легкой промышленности;'
			},
			{
				desc: 'Борьба с контрафактной продукцией и мониторинг качества товаров на рынке.'
			}
		]
	},
  {
		bold: 'Социальные инициативы и трудовые отношения:',
		list: [
			{
				desc: 'Повышение престижа профессий в легкой промышленности и уровня доходов сотрудников отрасли;'
			},
			{
				desc: 'Совместная работа над совершенствованием трудового законодательства для обеспечения гибкости и безопасности условий труда.'
			}
		]
	}
]
const DirectionComponent = () => {
	return (
		<Box pb={34}>
			<TitleComponent fontSize={{ md: 34, base: 28 }}>
      Основные направления деятельности Кыргызской платформы швейных ассоциаций на 2024 год и до 2030 года:
			</TitleComponent>

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
			</OrderedList>
		</Box>
	)
}

export default DirectionComponent

