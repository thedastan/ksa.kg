import { PRIVATE_API } from '@/api/interceptors'

class ProfileService {
	private BASE_URL = 'account/profile/'

	async get() {
		const response = await PRIVATE_API.get<any>(this.BASE_URL)

		return response.data
	}

	async update(value: any) {
		const response = await PRIVATE_API.put(this.BASE_URL + 'update/', value)

		return response.data
	}
	async updateAvatar(file: File) {
		let formData = new FormData()
		formData.set('image', file)
		const response = await PRIVATE_API.put(
			this.BASE_URL + 'update/',
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}
		)

		return response.data
	}
}

export const profileService = new ProfileService()
