import { Controller, Get, Param } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private readonly AdminService: AdminService ){}

    @Get()
    getAlladminProduct(){
        return this.AdminService.getAlladminProduct();
    }

    @Get(':id')
    getadminProductbyid(@Param('id') id : string){
        return this.AdminService.getadminProductbyid(Number(id))
    }
}
