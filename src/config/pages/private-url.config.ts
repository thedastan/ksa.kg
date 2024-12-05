import { EnumUserRole, RoleTypes } from '@/models/enum/user.enum'
import { EnumUserRole, RoleTypes } from '@/models/user.model'

class PRIVATE {
	private root = '/user'
	private roleObj = {
		[EnumUserRole.SUPERADMIN]: '',
		[EnumUserRole.CUSTOMER]: this.root + '/customer',
		[EnumUserRole.MANUFACTURER]: this.root + '/manufacturer'
	}
	MENU = this.root

	// PROFILE = (role: RoleTypes) => {
	// 	return `${this.roleObj[role]}/profile`
	// }

	PROFILE = `${this.root}/profile`
	MY_ORDERS = `${this.root}/my-orders`
	REVIEWS = `${this.root}/reviews`
	MY_COMPANIES = `${this.root}/my-companies`
	FAVORITES = `${this.root}/favorites`
	TARIFFS = `${this.root}/tariffs`
	NOTIFICATION = `${this.root}/notification`
}
export const USER_PAGES = new PRIVATE()
