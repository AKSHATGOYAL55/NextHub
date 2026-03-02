import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';
import { promises } from 'dns';

@Controller('employee')
export class EmployeeController {

    constructor(private readonly EmployeeService : EmployeeService){}

    @Post()
    async createEmployee(@Body() body : Partial<Employee>) : Promise<Employee>{
        return this.EmployeeService.createEmployee(body)
    }

    @Get()
    async AllEmployee(){
        return this.EmployeeService.AllEmployee()
    }
      

    @Get(":id")
    async EmployeeById(@Param("id", ParseIntPipe) id : number): Promise<Employee>{
        return this.EmployeeService.EmployeeById(id)
    }

    @Patch(":id")
    async updateEmployee(@Param("id", ParseIntPipe) id : number, @Body() body : Partial<Employee>) : Promise<Employee>{
        return this.EmployeeService.updateEmployee(id, body)
    }

    @Delete(":id")
    async deleteEmployee(@Param("id", ParseIntPipe) id : number): Promise<void>{
        return this.EmployeeService.deleteEmployee(id)
    }

    @Put(":id")
    async updateEmployee2(@Param("id", ParseIntPipe) id: number , @Body() body: Partial<Employee>) : Promise<Employee>{
        return this.EmployeeService.updateEmployee2(id, body)
    }

}
