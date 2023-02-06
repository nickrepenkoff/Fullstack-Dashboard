import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { ReviewModel } from './review.model'
import { ReviewDto } from './dto/review.dto'

@Injectable()
export class ReviewService {
	constructor(
		@InjectModel(ReviewModel)
		private readonly reviewModel: typeof ReviewModel
	) {}

	async create(userId: number, dto: ReviewDto) {
		return this.reviewModel.create({ ...dto, userId })
	}

	async searchById(id: number) {
		const review = await this.reviewModel.findByPk(id)

		if (!review) throw new NotFoundException('Review not found')

		return review
	}

	async getAll() {
		return this.reviewModel.findAll({
			order: [['createdAt', 'DESC']],
			include: [{ all: true }]
		})
	}

	async delete(id: number) {
		return this.reviewModel.destroy({ where: { id } })
	}
}
