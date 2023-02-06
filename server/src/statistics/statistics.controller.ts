import { Controller, Get } from '@nestjs/common'
import { StatisticsService } from './statistics.service'
import { Auth } from '../auth/decorators/auth.decorator'

@Controller('statistics')
export class StatisticsController {
	constructor(private readonly statisticsService: StatisticsService) {}

	@Get('/main')
	@Auth()
	async getMainStatistics() {
		return this.statisticsService.getMainStatistics()
	}

	@Get('/additional')
	@Auth()
	async getStatistics() {
		return this.statisticsService.getStatistics()
	}
}
