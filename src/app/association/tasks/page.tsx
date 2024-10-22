import { Metadata } from 'next'

import TasksComponent from '@/components/association/tasks'

import { NO_INDEX_PAGE } from '@/constants/seo/seo.constants'

export const metadata: Metadata = {
	title: 'Цели и задачи',
	...NO_INDEX_PAGE
}

export default function TasksPage() {
	return <TasksComponent />
}
