import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, ReactNode, useEffect } from 'react'

import { useAction } from '@/hooks/useAction'
import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<TypeComponentAuthFields & { children: ReactNode }> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}) => {
	const { user } = useAuth()
	const { pathname } = useRouter()
	const { logout, checkAuth } = useAction()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')

		if (accessToken) checkAuth()
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')

		if (!refreshToken && user) logout()
	}, [pathname])

	return !isOnlyAdmin && !isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyUser, isOnlyAdmin }}>
			{children}
		</DynamicCheckRole>
	)
}

export default AuthProvider
