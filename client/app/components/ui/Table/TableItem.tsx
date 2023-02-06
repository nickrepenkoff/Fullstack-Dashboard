import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import {
	HiOutlineExternalLink,
	HiOutlinePencil,
	HiOutlineTrash,
} from 'react-icons/hi'

import { useTheme } from '../../../hooks/useTheme'

import { ITableItem } from './ITable'
import styles from './Table.module.scss'

const TableItem: FC<{ item: ITableItem }> = ({ item }) => {
	const { isDarkTheme } = useTheme()
	return (
		<div className={styles.tableItem}>
			<div className={styles.itemBody}>
				{item.image && (
					<Image src={item.image} alt={item.name} width={40} height={61} />
				)}
				<div>{item.name}</div>
			</div>
			<div className={styles.actions}>
				<a
					href={item.viewLink}
					rel="noreferrer"
					target="_blank"
					className={isDarkTheme ? styles.viewLinkDark : styles.viewLinkLight}
				>
					<HiOutlineExternalLink />
				</a>
				{item.editLink && (
					<Link href={item.editLink}>
						<a
							className={
								isDarkTheme ? styles.editLinkDark : styles.editLinkLight
							}
						>
							<HiOutlinePencil />
						</a>
					</Link>
				)}
				<button onClick={item.removeHandler}>
					<HiOutlineTrash />
				</button>
			</div>
		</div>
	)
}

export default TableItem
