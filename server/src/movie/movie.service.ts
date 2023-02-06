import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { MovieModel } from './movie.model'
import { Op, WhereOptions } from 'sequelize'
import { MovieDto } from './dto/movie.dto'
import { ReviewModel } from '../review/review.model'
import { UserModel } from '../auth/user.model'

@Injectable()
export class MovieService {
	constructor(
		@InjectModel(MovieModel)
		private readonly movieModel: typeof MovieModel
	) {}

	async searchById(id: number) {
		const movie = await this.movieModel.findOne({
			where: { id },
			include: [{ model: ReviewModel, include: [UserModel] }]
		})

		if (!movie) throw new NotFoundException('Movie not found')

		return movie
	}

	async getAll(searchTerm?: string) {
		let options: WhereOptions<MovieModel> = {}

		if (searchTerm) {
			options = {
				name: { [Op.like]: `%${searchTerm}%` }
			}
		}

		return this.movieModel.findAll({
			where: {
				...options
			},
			order: [['createdAt', 'DESC']],
			include: [{ all: true }]
		})
	}

	async create() {
		const movie = await this.movieModel.create()
		return movie.id
	}

	async update(id: number, dto: MovieDto) {
		const movie = await this.searchById(id)

		return movie.update({ ...movie, ...dto })
	}

	async delete(id: number) {
		return this.movieModel.destroy({ where: { id } })
	}
}
