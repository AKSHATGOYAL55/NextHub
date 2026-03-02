import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';

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

}
