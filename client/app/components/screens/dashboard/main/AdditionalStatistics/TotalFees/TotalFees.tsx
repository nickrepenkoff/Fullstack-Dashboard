import React, { FC } from 'react'
import { MdOutlineQueryStats } from 'react-icons/md'

import AnimatedCounter from '../../../../../ui/AnimatedCounter/AnimatedCounter'
import Progressbar from '../../../../../ui/Progressbar/Progressbar'

import styles from './TotalFees.module.scss'

const TotalFees: FC<{ total: number }> = ({ total }) => {
	return (
		<div className={styles.fees}>
			<Progressbar percent={Math.round((total * 100) / 3000000000)} />
			<div className={styles.icon}>
				<MdOutlineQueryStats />
			</div>
			<div className={styles.name}>Total fees</div>
			<div className={styles.total}>
				$<AnimatedCounter to={total} />
			</div>
		</div>
	)
}

export default TotalFees
