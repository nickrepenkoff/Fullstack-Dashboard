import type { GetStaticProps, NextPage } from 'next'

import Home from '../app/components/screens/home/Home'
import { IHome } from '../app/components/screens/home/IHome'
import { MovieService } from '../app/services/movie/movie.service'

const HomePage: NextPage<IHome> = props => {
	return <Home {...props} />
}

export const getStaticProps: GetStaticProps<IHome> = async () => {
	try {
		const { data: newMovies } = await MovieService.getAll()

		return {
			props: { newMovies },
			revalidate: 60,
		}
	} catch (e) {
		console.log(e)

		return {
			props: { newMovies: [] },
		}
	}
}

export default HomePage
