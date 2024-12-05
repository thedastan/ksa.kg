export interface ICompany {
	id: number
	com_media: IComMedum[]
	com_certificate: IComCertificate[]
	created_at: string
	updated_at: string
	company: string
	brand: string
	site_link: string
	phone: string
	address_link: string
	min_just_link: string
	description: string
	logo: string
	year: string
	staff_number: string
	product_per_month: string
	sample_time: string
	area: string
	min_product_number: string
	prepayment: string
	business: number
	city: number
	equipment: number
	keyword: number[]
	subcategory: number[]
	staff: number[]
	material: number[]
}

export interface IComMedum {
	id: number
	image_link: any
}

export interface IComCertificate {
	id: number
	certificate_link: any
}

export interface ISubcategory {
	id: number
	name: string
}
