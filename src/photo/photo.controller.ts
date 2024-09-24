import { BadRequestException, Controller, Query } from '@nestjs/common';
import { HttpCode, Get, Request } from '@nestjs/common';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get('')
  @HttpCode(200)
  async fetchPhotos( @Query('numberOfUrls') numberOfUrls?: number): Promise<string[]> {
    if (!numberOfUrls || numberOfUrls <= 0) {
      throw new BadRequestException(
        'Invalid numberOfPages. It must be a positive number.',
      );
    }

    try {
      return this.photoService.fetchPhotoUrls(numberOfUrls);
    } catch (error) {
      throw new BadRequestException(
        'Failed to fetch photos. Please try again.',
      );
    }
  }
}
