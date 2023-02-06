import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { MovieService } from './movie.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { MovieDto } from './dto/movie.dto'

@Controller('movie')
export class MovieController {
	constructor(private readonly movieService: MovieService) {}

	@Get()
	async getAll(@Query('searchTerm') searchTerm?: string) {
		return this.movieService.getAll(searchTerm)
	}

	@Get(':movieId')
	async getMovie(@Param('movieId') movieId: string) {
		return this.movieService.searchById(Number(movieId))
	}

	@HttpCode(200)
	@Post()
	@Auth()
	async createMovie() {
		return this.movieService.create()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	@Auth()
	async updateMovie(@Param('id') id: string, @Body() dto: MovieDto) {
		return this.movieService.update(Number(id), dto)
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async deleteMovie(@Param('id') id: string) {
		return this.movieService.delete(Number(id))
	}
}
