import React, { FC } from 'react'

import { useAuth } from '../../../../hooks/useAuth'
import { IReview } from '../../../../shared/interfaces/IReview'
import Loader from '../../../ui/Loader/Loader'

import AddReviewForm from './AddReviewForm/AddReviewForm'
import ReviewItem from './ReviewItem'

interface IReviewProps {
	movieId: number
	reviews: IReview[]
	isLoading: boolean
}

const Reviews: FC<IReviewProps> = ({ movieId, reviews, isLoading }) => {
	const { user } = useAuth()

	return (
		<div style={{ marginTop: '2.5rem' }}>
			<div>{user && <AddReviewForm movieId={movieId} />}</div>
			{isLoading ? (
				<Loader />
			) : reviews.length ? (
				<>
					<div>
						{reviews.map(review => (
							<ReviewItem review={review} key={review.id} />
						))}
					</div>
				</>
			) : (
				<p>Reviews not found!</p>
			)}
		</div>
	)
}

export default Reviews
