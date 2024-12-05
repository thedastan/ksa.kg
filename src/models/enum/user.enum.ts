export enum EnumUserRole {
	SUPERADMIN = '0',
	MANUFACTURER = '1',
	CUSTOMER = '2'
}

export type RoleTypes =
	| EnumUserRole.SUPERADMIN
	| EnumUserRole.CUSTOMER
	| EnumUserRole.MANUFACTURER
