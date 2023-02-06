import React, { FC } from 'react'

import Layout from '../../ui/Layout/Layout'
import MovieItem from '../../ui/MovieItem/MovieItem'

import styles from './Home.module.scss'
import { IHome } from './IHome'

const Home: FC<IHome> = ({ newMovies }) => {
	return (
		<Layout title="My cinema">
			<h1 className={styles.heading}>Newest movies</h1>
			<div className={styles.catalog}>
				{newMovies.length ? (
					newMovies.map(movie => <MovieItem movie={movie} key={movie.id} />)
				) : (
					<div> Moives were not found</div>
				)}
			</div>
		</Layout>
	)
}

export default Home
