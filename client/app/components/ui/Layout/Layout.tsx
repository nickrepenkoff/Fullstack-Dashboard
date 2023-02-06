import React, { FC, PropsWithChildren } from 'react'

import { useAuth } from '../../../hooks/useAuth'
import { IMeta } from '../../../utils/meta/IMeta'
import Meta from '../../../utils/meta/Meta'
import Header from '../header/Header'

import styles from './Layout.module.scss'
import Sidebar from './Sidebar/Sidebar'

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, ...metaArgs }) => {
	const { user } = useAuth()
	return (
		<>
			<Meta {...metaArgs} />
			<section className={user ? styles.wrapper : ''}>
				{user && <Sidebar />}
				<div className={user ? styles.content : ''}>
					<Header />
					<main className={styles.main}>{children}</main>
				</div>
			</section>
		</>
	)
}

export default Layout
