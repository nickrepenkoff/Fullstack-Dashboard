import axios from '../../api/interceptor'
import { IStatisticItem } from '../../components/ui/StatisticItem/IStatisticItem'

import { IAdditionalStatisticsResponse } from './IStatistics'

export const StatisticService = {
	async getMain() {
		return axios
			.get<IStatisticItem[]>(`/statistics/main`)
			.then(({ data }) => data)
	},

	async getAdditional() {
		return axios
			.get<IAdditionalStatisticsResponse>(`/statistics/additional`)
			.then(({ data }) => data)
	},
}
