import { Column, ForeignKey, Model, Table } from 'sequelize-typescript'
import { MovieModel } from '../movie/movie.model'

@Table({ tableName: 'Views', deletedAt: false, version: false })
export class ViewsModel extends Model<ViewsModel> {
	@ForeignKey(() => MovieModel)
	@Column
	movieId: number

	@Column({ defaultValue: 0 })
	views: number
}
