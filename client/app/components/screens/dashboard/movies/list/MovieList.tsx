import React from 'react'

import Button from '../../../../ui/Button/Button'
import Layout from '../../../../ui/Layout/Layout'
import Table from '../../../../ui/Table/Table'
import Heading from '../../../../ui/heading/Heading'

import { useMovie } from './useMovie'

const MovieList = () => {
	const { mutate, create, response, isLoading } = useMovie()
	return (
		<Layout title="Movie List">
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
				<Heading isMargin={false}>Movie List</Heading>
				<Button onClick={() => create()}>Create Movie</Button>
			</div>
			<Table
				items={
					response?.data.length
						? response?.data.map(movie => ({
								id: movie.id,
								name: movie.name,
								image: movie.poster,
								editLink: `/manage/movies/edit/${movie.id}`,
								viewLink: `/movie/${movie.id}`,
								removeHandler: () => mutate(movie.id),
						  }))
						: []
				}
				isLoading={isLoading}
			/>
		</Layout>
	)
}

export default MovieList
