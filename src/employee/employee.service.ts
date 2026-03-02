import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'dns';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee)
        private employeeRepository : Repository<Employee>
    ){}

    async createEmployee(employeeData : Partial<Employee>) : Promise<Employee>{
        const Employee = this.employeeRepository.create(employeeData);
        return this.employeeRepository.save(Employee)
    }
}
