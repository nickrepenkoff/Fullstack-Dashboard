import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	LinearScale,
	Tooltip,
} from 'chart.js'
import React, { FC } from 'react'
import { Bar } from 'react-chartjs-2'

import { useTheme } from '../../../../../../hooks/useTheme'
import { IViewsByMonth } from '../../../../../../services/statistics/IStatistics'

import styles from './ViewsChart.module.scss'
import { options } from './chartData'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

const ViewsChart: FC<{ data: IViewsByMonth[] }> = ({ data }) => {
	const { isDarkTheme } = useTheme()
	return (
		<div className={styles.chart}>
			<Bar
				options={options(isDarkTheme)}
				data={{
					labels: data.map(item => item.month),
					datasets: [
						{
							label: 'Views',
							data: data.map(item => item.views),
							backgroundColor: isDarkTheme ? '#6b6bbf' : '#7A94FE',
						},
					],
				}}
				// @ts-ignore
				type="bar"
			/>
		</div>
	)
}

export default ViewsChart
