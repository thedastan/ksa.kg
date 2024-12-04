export enum EnumUserRole {
	SUPERADMIN = 0,
	CUSTOMER = 1,
	MANUFACTURER = 2
}

export type RoleTypes =
	| EnumUserRole.SUPERADMIN
	| EnumUserRole.CUSTOMER
	| EnumUserRole.MANUFACTURER
