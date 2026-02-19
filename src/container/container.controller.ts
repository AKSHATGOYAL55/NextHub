import { Controller, Get } from '@nestjs/common';
import { ContainerService } from './container.service';

@Controller('container')
export class ContainerController {
    constructor(private readonly Container : ContainerService){}

    @Get()
    getContainerItem(){
        return this.Container.getContainerItem();
    }
}
