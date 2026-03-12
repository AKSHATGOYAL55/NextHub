import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, UseGuards } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';
import { promises } from 'dns';
import { SupabaseAuthGuard } from '../auth/supabase-auth/supabase-auth.guard';

@Controller('employee')
export class EmployeeController {

    constructor(private readonly EmployeeService : EmployeeService){}

    @Post()
    async createEmployee(@Body() body : Partial<Employee>) : Promise<Employee>{
        return this.EmployeeService.createEmployee(body)
    }


    // @UseGuards(SupabaseAuthGuard)
    // @Get()
    // async findAll(){
    //     return this.EmployeeService.AllEmployee()
    // }
    @UseGuards(SupabaseAuthGuard)
    @Get()
    async AllEmployee(){
        return this.EmployeeService.AllEmployee()
    }
    
    // @UseGuards(SupabaseAuthGuard)
      @Get("search")
    async searchEmployee(@Query("name") name? : string, @Query('department') department? : string) : Promise<Employee[]>{
        return this.EmployeeService.search(name, department, { name, department })
    }

    @UseGuards(SupabaseAuthGuard)
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
