import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import styles from './UserAvatar.module.scss'

interface IUserAvatar {
	avatarPath: string
	link: string
	title?: string
}

const UserAvatar: FC<IUserAvatar> = ({ avatarPath, link, title }) => {
	return (
		<Link href={link}>
			<a title={title}>
				<Image
					src={avatarPath}
					width={45}
					height={45}
					alt="avatar img"
					className={styles.avatar}
				/>
			</a>
		</Link>
	)
}

export default UserAvatar
