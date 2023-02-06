export interface IViewsByMonth {
	views: string
	month: Date
}

export interface IAdditionalStatisticsResponse {
	totalFees: number
	viewsByMonth: IViewsByMonth[]
}
