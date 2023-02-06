import cn from 'classnames'
import React, { FC } from 'react'

import { getIcon } from '../../../services/statistics/statistics.util'
import AnimatedCounter from '../AnimatedCounter/AnimatedCounter'

import { IStatisticItem } from './IStatisticItem'
import styles from './StatisticItem.module.scss'

const StatisticItem: FC<{ item: IStatisticItem }> = ({ item }) => {
	const Icon = getIcon(item.id)
	return (
		<div className={cn(styles.item, styles[`color_${item.id}`])}>
			<div className={styles.icon}>
				<Icon />
			</div>

			<div className={styles.name}>{item.name}</div>
			<div className={styles.value}>
				<AnimatedCounter to={item.value} />
			</div>
		</div>
	)
}

export default StatisticItem
