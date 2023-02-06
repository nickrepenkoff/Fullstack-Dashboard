import { FC } from 'react'

import Loader from '../Loader/Loader'

import { ITableItem } from './ITable'
import styles from './Table.module.scss'
import TableItem from './TableItem'

const Table: FC<{ items: ITableItem[]; isLoading?: boolean }> = ({
	items,
	isLoading,
}) => {
	return (
		<div className={styles.table}>
			{isLoading ? (
				<Loader count={3} />
			) : items?.length ? (
				items.map(item => <TableItem key={item.id} item={item} />)
			) : (
				<div>Items were not found :(</div>
			)}
		</div>
	)
}

export default Table
