import Cookies from 'js-cookie'

import { EnumUserRole, RoleTypes } from '@/models/enum/user.enum'

export const ROLE_KEY = 'role'
export const saveUserRole = (role: RoleTypes) => {
	Cookies.set(ROLE_KEY, encodeURIComponent(role), {
		sameSite: 'strict',
		expires: 1
	})
}

export const getUserRole = (): RoleTypes => {
	const role = decodeURIComponent(Cookies.get(ROLE_KEY) as string) as
		| RoleTypes
		| undefined
	return role ? role : EnumUserRole.SUPERADMIN
}

export const TitlesRole = {
	[EnumUserRole.SUPERADMIN]: 'nobody',
	[EnumUserRole.CUSTOMER]: 'customer',
	[EnumUserRole.MANUFACTURER]: 'manufacturer'
}
