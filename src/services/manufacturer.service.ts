import { PRIVATE_API } from '@/api/interceptors'

import { ICompany, ISubcategory } from '@/models/company.model'

class ManufacturerService {
	private BASE_URL = 'manufacturer/'

	async getCompanies() {
		const response = await PRIVATE_API.get<ICompany[]>(
			this.BASE_URL + 'company/'
		)
		return response.data
	}

	async getSubcategories() {
		const response = await PRIVATE_API.get<ISubcategory[]>(
			this.BASE_URL + 'subcategory/'
		)
		return response.data
	}

	async create(value: any) {
		const response = await PRIVATE_API.post(this.BASE_URL + 'create/', value)

		return response.data
	}
}

export const manufacturerService = new ManufacturerService()
