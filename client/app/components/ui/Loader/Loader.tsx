import React, { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { useTheme } from '../../../hooks/useTheme'

const Loader: FC<SkeletonProps> = props => {
	const { isDarkTheme } = useTheme()
	return (
		<Skeleton
			className="loader"
			baseColor={isDarkTheme ? '#424451' : '#D7E3FF'}
			highlightColor={isDarkTheme ? '#8e91a0' : '#E8EDFB'}
			{...props}
		/>
	)
}

export default Loader
