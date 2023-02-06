import { motion } from 'framer-motion'
import React, { FC } from 'react'

import styles from './Progressbar.module.scss'
import { useProgressAnimate } from './useProgressAnimate'

const Progressbar: FC<{ percent: number }> = ({ percent }) => {
	const { variants } = useProgressAnimate(percent)
	return (
		<div className={styles.progress}>
			<div className={styles.barOverflow}>
				<motion.div className={styles.bar} {...variants} />
			</div>
			<div className={styles.percent}>{percent}%</div>
		</div>
	)
}

export default Progressbar
