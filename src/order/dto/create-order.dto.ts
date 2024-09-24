import { IsNotEmpty, IsString, IsArray, IsEnum } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsString()
  fullAddress: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true }) // Validate each item in the array as a string
  imagesUrls: string[];

  @IsNotEmpty()
  @IsString()
  frameColor: string;

  @IsNotEmpty()
  @IsString()
  user: string; // This could be a user ID or username
}