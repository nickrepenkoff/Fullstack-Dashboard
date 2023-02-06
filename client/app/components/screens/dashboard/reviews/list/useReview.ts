import { useMutation, useQuery } from '@tanstack/react-query'

import { queryClient } from '../../../../../../pages/_app'
import { ReviewsService } from '../../../../../services/reviews/reviews.service'

export const useReview = () => {
	const { data: response, isLoading } = useQuery(['get all reviews'], () =>
		ReviewsService.getAll()
	)

	const { mutate } = useMutation(
		['remove review'],
		(id: number) => ReviewsService.deleteReview(id),
		{
			async onSuccess() {
				await queryClient.invalidateQueries(['get all reviews'])
			},
		}
	)

	return { response, isLoading, mutate }
}
