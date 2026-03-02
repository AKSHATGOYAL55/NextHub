import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeeService {
    [x: string]: any;
    constructor(
        @InjectRepository(Employee)
        private employeeRepository : Repository<Employee>
    ){}

    async createEmployee(employeeData : Partial<Employee>) : Promise<Employee>{
        const Employee = this.employeeRepository.create(employeeData);
        return this.employeeRepository.save(Employee)
    }

    async AllEmployee(): Promise<Employee[]>{
        return this.employeeRepository.find();
    }

    async EmployeeById(id : number) : Promise<Employee>{
        const employee = await this.employeeRepository.findOneBy({id});
        if (!employee){
            throw new NotFoundException(`employee with id ${id} not found`);
        }
        return employee
    }

    async updateEmployee(id: number, employeData: Partial<Employee>): Promise<Employee>{
        const employee = await this.employeeRepository.preload({
            id,
            ...employeData
        })
        if(!employee){
            throw new NotFoundException(`employee with id ${id} not found`);
        }
        return this.employeeRepository.save(employee)
    }
//     async updateEmployee2(id: number, employeData: Partial<Employee>): Promise<Employee>{
//         const employee = await this.employeeRepository.findOneBy({
//             id
//         })
//         if(!employee){
//             throw new NotFoundException(`employee with id ${id} not found`);
//         }
//         const updatedEmployee = Object.assign(employee, employeData);
//         return this.employeeRepository.save(updatedEmployee)
// }
}
