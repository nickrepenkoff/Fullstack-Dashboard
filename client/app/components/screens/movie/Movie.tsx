import { useMutation, useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import { MovieService } from '../../../services/movie/movie.service'
import { ViewsService } from '../../../services/views/views.service'
import Layout from '../../ui/Layout/Layout'

import styles from './Movie.module.scss'
import Reviews from './reviews/Reviews'

const Movie = () => {
	const { query } = useRouter()
	const movieId = Number(query?.id)
	const { data: movie, isLoading } = useQuery(
		['get movie', movieId],
		() => MovieService.getMovieById(movieId),
		{ enabled: !!movieId, select: ({ data }) => data }
	)

	const { mutate } = useMutation(['update count opened'], () =>
		ViewsService.updateViews(movieId.toString())
	)

	useEffect(() => {
		if (movieId) mutate()
	}, [movieId])

	return (
		<Layout title={`${movie?.name}`}>
			<div className={styles.wrapper}>
				<div className={styles.poster}>
					<Image
						src={movie?.poster || ''}
						alt={'movie poster'}
						width={220}
						height={330}
						layout={'responsive'}
						className={styles.image}
					/>
				</div>
				<div className={styles.detail}>
					<h1 className={styles.heading}>{movie?.name}</h1>
					<div className={styles.rating}>
						{Number(movie?.rating).toFixed(1)}
					</div>
					<div className={styles.title}>About movie</div>
					<ul>
						<li>
							<span>Fees</span>
							<span>${movie?.fees.toLocaleString()}</span>
						</li>
					</ul>
					<Reviews
						movieId={movieId}
						reviews={movie?.reviews || []}
						isLoading={isLoading}
					/>
				</div>
			</div>
		</Layout>
	)
}

export default Movie
