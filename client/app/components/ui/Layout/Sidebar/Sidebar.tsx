import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import Switcher from '../../Switcher/Switcher'

import styles from './Sidebar.module.scss'
import { menu } from './menu.data'

const Sidebar: FC = () => {
	const { asPath } = useRouter()
	return (
		<aside className={styles.sidebar}>
			<div>
				<Link href={'/'}>
					<a className={styles.logo}>R</a>
				</Link>

				<nav className={styles.menu}>
					<ul>
						{menu.map(item => (
							<li
								key={item.link}
								className={cn(styles.item, {
									[styles.active]: item.link === asPath,
								})}
							>
								<Link href={item.link}>
									<a>
										<item.Icon />
									</a>
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<Switcher />
			</div>
		</aside>
	)
}

export default Sidebar
