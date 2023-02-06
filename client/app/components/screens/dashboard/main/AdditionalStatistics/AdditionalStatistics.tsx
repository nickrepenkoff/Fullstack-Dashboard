import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { StatisticService } from '../../../../../services/statistics/statistic.service'
import Loader from '../../../../ui/Loader/Loader'
import Heading from '../../../../ui/heading/Heading'

import styles from './AdditionalStatistics.module.scss'
import TotalFees from './TotalFees/TotalFees'
import ViewsChart from './ViewsChart/ViewsChart'

const AdditionalStatistics = () => {
	const { data, isLoading } = useQuery(['get additional statistics'], () =>
		StatisticService.getAdditional()
	)
	return (
		<div className={styles.wrapper}>
			<Heading>Additional Statistics</Heading>
			{isLoading ? (
				<Loader />
			) : data ? (
				<div className={styles.content}>
					<TotalFees total={data.totalFees} />
					<ViewsChart data={data.viewsByMonth} />
				</div>
			) : (
				<div>Statistics were not found :(</div>
			)}
		</div>
	)
}

export default AdditionalStatistics
