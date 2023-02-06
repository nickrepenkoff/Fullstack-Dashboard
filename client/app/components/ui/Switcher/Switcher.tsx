import cn from 'classnames'
import React from 'react'
import { BsSquareHalf } from 'react-icons/bs'

import { useTheme } from '../../../hooks/useTheme'

import styles from './Switcher.module.scss'

const Switcher = () => {
	const { isDarkTheme, toggleDark } = useTheme()
	return (
		<button
			className={cn(styles.button, { [styles.light]: !isDarkTheme })}
			onClick={toggleDark}
		>
			<BsSquareHalf />
		</button>
	)
}

export default Switcher
