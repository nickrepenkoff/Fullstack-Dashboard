import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import styles from './Header.module.scss'

const Logo = () => {
	const { pathname } = useRouter()

	return (
		<Link href="/">
			<a className={styles.logo}>
				Repenko | {pathname.slice(1) === 'dashboard' ? 'Dashboard' : 'Cinema'}
			</a>
		</Link>
	)
}

export default Logo
