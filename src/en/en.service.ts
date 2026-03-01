import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'

@Injectable()
export class EnService {
    constructor( private readonly configService : ConfigService){}

    // getURL(){
    //     return this.configService.get<string>("DATABASE_URL")
    // }
}
