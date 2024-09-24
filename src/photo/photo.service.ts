import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PhotoService {
  constructor(private httpService: HttpService, private readonly configService: ConfigService) {}

  async fetchPhotoUrls(numberOfUrls: number): Promise<string[]> {
    const apiKey =  this.configService.get<string>('photo.token');
    const url = this.configService.get<string>('photo.apiUrl');

      const response = await firstValueFrom(
        this.httpService.get(url, {
          params: {
            key: apiKey,
            per_page: numberOfUrls,
          }
        }).pipe(
          map(response => {
            const hits = response.data.hits;
            return hits.map(hit => hit.userImageURL);
          })
        )
      );
  
      return response;
  }
}
