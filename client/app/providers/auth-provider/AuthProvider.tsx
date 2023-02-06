import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState,
} from 'react'

import { AuthService } from '../../services/auth/auth.service'

import { IContext, TypeUserState } from './IAuth'

export const AuthContext = createContext({} as IContext)

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null)

	const { pathname } = useRouter()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')

		if (accessToken) {
			const myUser = JSON.parse(localStorage.getItem('user') || '""')

			setUser(myUser)
		}
	}, [])

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (!accessToken && !user) {
			AuthService.logout()
			setUser(null)
		}
	}, [pathname])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
