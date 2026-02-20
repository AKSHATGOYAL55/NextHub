import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly EmployeeService : EmployeeService){}

    @Get()
    getAll(){
        return this.EmployeeService.getAllEmployee()
    }

    @Get(":id")
    getByid(@Param("id") id : string){
        return this.EmployeeService.getEmployeById(Number(id))
    }

    @Post()
     create(@Body() body : { name : string , class : string}){
        return this.EmployeeService.createEmploye(body)
    }

    @Put(":id")
    updateEmp(@Param("id") id : string , @Body() body : {name : string , class: string}){
        return this.EmployeeService.changeemploye(Number(id), body)
    }

    @Patch(":id")
    changeEmp(@Param ("id") id : string, @Body() body : Partial<{name : string, class : string}>){
        return this.EmployeeService.patchemploye(Number(id),body)
    }

    @Delete(":id")
    deleteEmp(@Param ("id") id: string){
        return this.EmployeeService.deleteemploye(Number(id))
    }
}

