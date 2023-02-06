import { FC } from 'react'

import Layout from '../../../ui/Layout/Layout'

import AdditionalStatistics from './AdditionalStatistics/AdditionalStatistics'
import MainStatistics from './MainStatistics/MainStatistics'

const Dashboard: FC = () => {
	return (
		<Layout title={'Dashboard'}>
			<MainStatistics />
			<AdditionalStatistics />
		</Layout>
	)
}

export default Dashboard
