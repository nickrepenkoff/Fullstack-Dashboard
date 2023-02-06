import React from 'react'

import Layout from '../../../../ui/Layout/Layout'
import Table from '../../../../ui/Table/Table'
import Heading from '../../../../ui/heading/Heading'

import { useReview } from './useReview'

const ReviewList = () => {
	const { mutate, response, isLoading } = useReview()
	return (
		<Layout title="Review List">
			<div
				//tailwind classes does not work, temporary inline styles
				//TODO fix the problem with Tailwind and delete inline styles :)
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					position: 'relative',
				}}
			>
				<Heading isMargin={false}>Review List</Heading>
			</div>
			<Table
				items={
					response?.data.length
						? response?.data.map(review => ({
								id: review.id,
								name: review.description,
								image: review.movie.poster,

								viewLink: `/movie/${review.movie.id}`,
								removeHandler: () => mutate(review.id),
						  }))
						: []
				}
				isLoading={isLoading}
			/>
		</Layout>
	)
}

export default ReviewList
