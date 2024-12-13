import { EnumUserRole, RoleTypes } from '@/models/enum/user.enum'

class PRIVATE {
	private root = '/user'
	private roleObj = {
		[EnumUserRole.SUPERADMIN]: '',
		[EnumUserRole.CUSTOMER]: this.root + '/customer',
		[EnumUserRole.MANUFACTURER]: this.root + '/manufacturer'
	}
	MENU = this.root

	PROFILE = `${this.root}/profile`
	REVIEWS = `${this.root}/reviews`

	FAVORITES = `${this.root}/favorites`
	TARIFFS = `${this.root}/tariffs`
	NOTIFICATION = `${this.root}/notification`

	// manufacturer:
	MY_COMPANIES = `${this.root}/my-companies`
	CREATE_COMPANY = `${this.root}/create-company`

	// customer:
	MY_ORDERS = `${this.root}/my-orders`
	PLACE_AN_ORDER = `${this.root}/place-an-order`
}
export const USER_PAGES = new PRIVATE()
