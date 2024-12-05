import { OtpcodeTypes } from './enum/auth.enum'
import { RoleTypes } from './enum/user.enum'

export interface IAuthResponse {
	access: string
	refresh: string
	role: RoleTypes | null
}

export interface IAuthForm {
	phone: string
	password: string
}

export interface ISendotpForm {
	phone: string
	type: OtpcodeTypes
}

export interface IRegisterForm {
	phone: string
	email: string
	role: RoleTypes
	password?: string
}
