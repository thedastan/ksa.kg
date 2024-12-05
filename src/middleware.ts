import { NextRequest, NextResponse } from 'next/server'

import { ACCESS_PAGES } from './config/pages/access-url.config'
import { USER_PAGES } from './config/pages/private-url.config'
import { PUBLIC_PAGES } from './config/pages/public-url.config'
import { EnumUserRole } from './models/enum/user.enum'
import { EnumTokens } from './services/auth-token.services'

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies, nextUrl } = request
	const role = decodeURIComponent(cookies.get(EnumTokens.ROLE)?.value as string)
	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value
	const isAuthPage = url.includes('/access')

	const isUserPage = url.includes('/user')

	// if (
	// 	isUserPage &&
	// 	refreshToken &&
	// 	role !== EnumUserRole.CUSTOMER &&
	// 	role !== EnumUserRole.MANUFACTURER
	// ) {
	// 	return NextResponse.redirect(new URL(PUBLIC_PAGES.HOME, url))
	// }

	if (isAuthPage && refreshToken) {
		return NextResponse.redirect(new URL(USER_PAGES.MY_COMPANIES, url))
	}

	if (isAuthPage) {
		return NextResponse.next()
	}

	if (!refreshToken) {
		return NextResponse.redirect(new URL(PUBLIC_PAGES.HOME, url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/access/:path*', '/user/:path*']
}
