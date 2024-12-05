import { FaTelegramPlane } from 'react-icons/fa'
import {
	RiInstagramFill,
	RiPhoneFill,
	RiWhatsappFill,
	RiYoutubeFill
} from 'react-icons/ri'

import { activity_pages } from '@/app/activity/data'
import { association_pages } from '@/app/association/data'
import { press_center_pages } from '@/app/press-center/data'

export const navbar_menu = [
	{ title: 'Об ассоциации', list: association_pages },
	{ title: 'Деятельность', list: activity_pages },
	{ title: 'Пресс-центр', list: press_center_pages }
]

export const main_navbar = [
	{
		title: 'Главная',
		link: '/'
	},
	{
		title: 'Каталог компаний',
		link: '/catalog'
	},
	{
		title: 'Выставки',
		link: '/exhibitions'
	},
	{
		title: 'Контакты',
		link: '/contacts'
	}
]

export const role_navbar = [
	{
		title: 'Заказчику',
		link: '/for-client'
	},
	{
		title: 'Производителю',
		link: '/for-implementer'
	}
]

export const SocialMediaIcons = {
	INSTAGRAM: RiInstagramFill,
	TELEGRAM: FaTelegramPlane,
	WHATSAPP: RiWhatsappFill,
	PHONE: RiPhoneFill,
	YOUTUBE: RiYoutubeFill
}
