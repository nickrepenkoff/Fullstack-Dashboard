import axios, { axiosClassic } from '../../api/interceptor'
import { IMovie, IMovieDto } from '../../shared/interfaces/IMovie'

export const MovieService = {
	async getMovieById(id: number) {
		return axiosClassic.get<IMovie>(`/movie/${id}`)
	},

	async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(`/movie`, {
			params: searchTerm ? { searchTerm } : {},
		})
	},

	async createMovie() {
		return axios.post<number>(`/movie`)
	},

	async updateMovie(id: number, body: IMovieDto) {
		return axios.put<IMovie>(`/movie/${id}`, body)
	},

	async deleteMovie(id: number) {
		return axios.delete(`/movie/${id}`)
	},
}
