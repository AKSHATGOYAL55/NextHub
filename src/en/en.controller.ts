import { Controller, Get } from '@nestjs/common';
import { EnService } from './en.service';

@Controller('en')
export class EnController {
    constructor(private readonly EnService : EnService){}

    @Get()
    getURL(){
        return this.EnService.getURL()
    }
}
