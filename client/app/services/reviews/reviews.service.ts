import axios from '../../api/interceptor'
import { IReview, IReviewDto } from '../../shared/interfaces/IReview'

export const ReviewsService = {
	async createReview(body: IReviewDto) {
		return axios.post<IReview>(`/review`, body)
	},
	async getReviewById(id: number) {
		return axios.get<IReview>(`/review/${id}`)
	},

	async getAll() {
		return axios.get<IReview[]>(`/review`)
	},
	async deleteReview(id: number) {
		return axios.delete(`/review/${id}`)
	},
}
