import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { queryClient } from '../../../../../../pages/_app'
import { MovieService } from '../../../../../services/movie/movie.service'

export const useMovie = () => {
	const { push } = useRouter()

	const { data: response, isLoading } = useQuery(['get all movies'], () =>
		MovieService.getAll()
	)

	const { mutate } = useMutation(
		['remove movie'],
		(id: number) => MovieService.deleteMovie(id),
		{
			async onSuccess() {
				await queryClient.invalidateQueries(['get all movies'])
			},
		}
	)

	const { mutate: create } = useMutation(
		['create movie'],
		() => MovieService.createMovie(),
		{
			onSuccess: ({ data: id }) => {
				push(`/manage/movies/edit/${id}`)
			},
		}
	)

	return { response, isLoading, mutate, create }
}
