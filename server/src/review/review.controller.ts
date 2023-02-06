import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { ReviewService } from './review.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { CurrentUser } from '../auth/decorators/user.decorator'
import { ReviewDto } from './dto/review.dto'

@Controller('review')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	@Auth()
	async createReview(@CurrentUser('id') id: string, @Body() dto: ReviewDto) {
		return this.reviewService.create(Number(id), dto)
	}

	@Get()
	@Auth()
	async getAll() {
		return this.reviewService.getAll()
	}
	@Get(':reviewId')
	@Auth()
	async getReview(@Param('reviewId') reviewId: string) {
		return this.reviewService.searchById(Number(reviewId))
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async deleteReview(@Param('id') id: string) {
		return this.reviewService.delete(Number(id))
	}
}
