import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'

import { MovieService } from '../../../../../services/movie/movie.service'
import { IMovieDto } from '../../../../../shared/interfaces/IMovie'

export const useMovieEdit = () => {
	const { query, push } = useRouter()
	const movieId = Number(query.id)

	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		setValue,
	} = useForm<IMovieDto>({ mode: 'onChange' })

	const { data, isLoading } = useQuery(
		['get movie by id', movieId],
		() => MovieService.getMovieById(movieId),
		{
			onSuccess: ({ data }) => {
				setValue('name', data.name)
				setValue('fees', data.fees)
				setValue('poster', data.poster)
			},
			enabled: !!movieId,
		}
	)

	const { mutate } = useMutation(
		['update movie', movieId],
		(data: IMovieDto) => MovieService.updateMovie(movieId, data),
		{
			onSuccess() {
				push('/manage/movies')
			},
		}
	)

	const onSubmit: SubmitHandler<IMovieDto> = data => {
		mutate(data)
	}

	return { register, errors, onSubmit, data, isLoading, control, handleSubmit }
}
