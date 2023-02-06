import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { StatisticService } from '../../../../../services/statistics/statistic.service'
import Loader from '../../../../ui/Loader/Loader'
import StatisticItem from '../../../../ui/StatisticItem/StatisticItem'
import Heading from '../../../../ui/heading/Heading'

import styles from './MainStatistics.module.scss'

const MainStatistics = () => {
	const { data, isLoading } = useQuery(['get main statistics'], () =>
		StatisticService.getMain()
	)
	return (
		<div>
			<Heading>Main Statistics</Heading>
			{isLoading ? (
				<Loader />
			) : data?.length ? (
				<div className={styles.content}>
					{data?.map(item => (
						<StatisticItem item={item} key={item.id} />
					))}
				</div>
			) : (
				<div>Statistics were not found :(</div>
			)}
		</div>
	)
}

export default MainStatistics
