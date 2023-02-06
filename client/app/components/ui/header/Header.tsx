import { useRouter } from 'next/router'
import React from 'react'

import styles from './Header.module.scss'
import Logo from './Logo'
import AuthForm from './login-form/AuthForm'
import Search from './search/Search'

const Header = () => {
	const { pathname } = useRouter()
	return (
		<header className={styles.header}>
			<Logo />
			{pathname.slice(1) === '' && <Search />}
			<AuthForm />
		</header>
	)
}

export default Header
