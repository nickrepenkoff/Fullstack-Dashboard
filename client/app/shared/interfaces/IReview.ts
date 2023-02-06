import { IMovie } from './IMovie'
import { IUser } from './IUser'

export interface IReview {
	id: number
	user: IUser
	movie: IMovie
	description: string
}

export interface IReviewDto extends Pick<IReview, 'description'> {
	movieId: number
}
