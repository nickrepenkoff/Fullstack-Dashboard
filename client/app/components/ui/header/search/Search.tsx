import { motion } from 'framer-motion'
import React, { FC } from 'react'
import { BiSearch } from 'react-icons/bi'

import { menuAnimation } from '../../../../utils/animation/fade'
import Field from '../../Field/Field'
import MovieItem from '../../MovieItem/MovieItem'

import styles from './Search.module.scss'
import { useSearch } from './useSearch'

const Search: FC = () => {
	const { data, handleSearch, searchTerm, isSuccess } = useSearch()
	return (
		<div className={styles.searchTop}>
			<label>
				<Field
					placeholder="Search movie..."
					value={searchTerm}
					onChange={handleSearch}
					Icon={BiSearch}
				/>
			</label>
			{isSuccess && (
				<motion.div
					initial={false}
					animate={isSuccess ? 'open' : 'closed'}
					variants={menuAnimation}
					className={styles.result}
				>
					{data?.length ? (
						data.map(movie => (
							<MovieItem movie={movie} key={movie.id} variant={'sm'} />
						))
					) : (
						<div>Movies were not found!</div>
					)}
				</motion.div>
			)}
		</div>
	)
}

export default Search
