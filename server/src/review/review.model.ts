import {
	BelongsTo,
	Column,
	ForeignKey,
	Model,
	Table
} from 'sequelize-typescript'
import { MovieModel } from '../movie/movie.model'
import { UserModel } from '../auth/user.model'

@Table({ tableName: 'Review', deletedAt: false, version: false })
export class ReviewModel extends Model<ReviewModel> {
	@Column({ defaultValue: '' })
	description: string

	@ForeignKey(() => MovieModel)
	@Column
	movieId: number

	@BelongsTo(() => MovieModel)
	movie: MovieModel

	@ForeignKey(() => UserModel)
	@Column
	userId: number

	@BelongsTo(() => UserModel)
	user: UserModel
}
