import { IsString } from 'class-validator';

export class StudentClassDTO {

  @IsString()
  name: string;

  @IsString()
  class: string;

  @IsString()
  address: string;

}