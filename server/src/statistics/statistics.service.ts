import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { MovieModel } from '../movie/movie.model'
import { ReviewModel } from '../review/review.model'
import { ViewsModel } from '../views/views.model'
import { col, fn } from 'sequelize'
import { IStatisticItem } from './IStatistics'
import * as dayjs from 'dayjs'
import * as updateLocale from 'dayjs/plugin/updateLocale'
import * as customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(updateLocale)
dayjs.extend(customParseFormat)

dayjs.updateLocale('en', {
	monthsShort: [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	]
})

@Injectable()
export class StatisticsService {
	constructor(
		@InjectModel(MovieModel)
		private readonly movieModel: typeof MovieModel,
		@InjectModel(ReviewModel)
		private readonly reviewModel: typeof ReviewModel,
		@InjectModel(ViewsModel)
		private readonly viewsModel: typeof ViewsModel
	) {}

	async getMainStatistics(): Promise<IStatisticItem[]> {
		const countReviews = await this.reviewModel.count()
		const countMovies = await this.movieModel.count()

		const views = await this.viewsModel
			.findAll({
				attributes: [[fn('sum', col('views')), 'views']]
			})
			.then((data) => Number(data[0].views as any))

		const averageRating = await this.movieModel
			.findAll({
				attributes: [[fn('avg', col('rating')), 'rating']]
			})
			.then((data) => Number(data[0].rating.toFixed(1)))

		return [
			{
				id: 1,
				name: 'Views',
				value: views
			},
			{
				id: 2,
				name: 'Average rating',
				value: averageRating
			},
			{
				id: 3,
				name: 'Movies',
				value: countMovies
			},
			{
				id: 4,
				name: 'Reviews',
				value: countReviews
			}
		]
	}

	async getStatistics() {
		const totalFees = await this.movieModel
			.findAll({
				attributes: [[fn('sum', col('fees')), 'fees']]
			})
			.then((data) => Number(data[0].fees as any))

		const viewsByMonth = await this.viewsModel.findAll({
			attributes: [
				[fn('sum', col('views')), 'views'],
				[fn('date_trunc', 'month', col('createdAt')), 'month']
			],
			group: 'month',
			order: [[col('month'), 'ASC']],
			raw: true
		})

		return {
			totalFees,
			viewsByMonth: viewsByMonth.map((item) => ({
				...item,
				//@ts-ignore
				month: dayjs(item.month).format('MMM')
			}))
		}
	}
}
