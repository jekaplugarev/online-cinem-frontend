import { FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcon'

import { useAction } from '@/hooks/useAction'

const LogoutButton: FC = () => {
	const { logout } = useAction()

	// @ts-ignore
	const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
	}

	return (
		<li>
			<a onClick={handleLogout}>
				<MaterialIcon name="MdLogout" />
				<span>Выход</span>
			</a>
		</li>
	)
}

export default LogoutButton
