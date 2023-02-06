import { IMediaResponse } from './IMedia'
import { path } from 'app-root-path'
import * as fs from 'fs'
import { Injectable } from '@nestjs/common'

@Injectable()
export class MediaService {
	async saveMedia(
		mediaFile: Express.Multer.File,
		folder = 'default'
	): Promise<IMediaResponse> {
		const uploadFolder = `${path}/uploads/${folder}`

		await fs.mkdirSync(uploadFolder)

		await fs.writeFileSync(
			`${uploadFolder}/${mediaFile.originalname}`,
			mediaFile.buffer
		)

		return {
			url: `/uploads/${folder}/${mediaFile.originalname}`,
			name: mediaFile.originalname
		}
	}
}
