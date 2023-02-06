import Head from 'next/head'
import React, { FC } from 'react'

import { IMeta } from './IMeta'

const Meta: FC<IMeta> = ({ title, description }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				{description ? (
					<meta
						itemProp="description"
						name="description"
						content={description}
					/>
				) : (
					<meta name="robots" content="noindex, nofollow" />
				)}
			</Head>
		</>
	)
}

export default Meta
