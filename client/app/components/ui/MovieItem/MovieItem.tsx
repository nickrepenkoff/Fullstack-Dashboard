import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import { IMovie } from '../../../shared/interfaces/IMovie'

import styles from './MovieItem.module.scss'

const MovieItem: FC<{ movie: IMovie; variant?: 'sm' | 'md' }> = ({
	movie,
	variant = 'md',
}) => {
	return (
		<Link href={`/movie/${movie.id}`}>
			<a className={cn(styles.item, { [styles.small]: variant === 'sm' })}>
				{movie.rating && (
					<div className={styles.rating}>{Number(movie.rating).toFixed(1)}</div>
				)}
				<div className={styles.poster}>
					<Image
						src={movie.poster}
						alt={'movie poster'}
						width={100}
						height={150}
						layout={'responsive'}
					/>
				</div>
				<div className={styles.heading}>{movie.name}</div>
			</a>
		</Link>
	)
}

export default MovieItem
