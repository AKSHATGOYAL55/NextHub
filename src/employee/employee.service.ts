import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeeService {
  [x: string]: any;
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async createEmployee(employeeData: Partial<Employee>): Promise<Employee> {
    const Employee = this.employeeRepository.create(employeeData);
    return this.employeeRepository.save(Employee);
  }

  async AllEmployee(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  async EmployeeById(id: number): Promise<Employee> {
    const employee = await this.employeeRepository.findOneBy({ id });
    if (!employee) {
      throw new NotFoundException(`employee with id ${id} not found`);
    }
    return employee;
  }

  //    this is used for patch method because in patch using Partial and preload.
  async updateEmployee(
    id: number,
    employeData: Partial<Employee>,
  ): Promise<Employee> {
    const employee = await this.employeeRepository.preload({
      id,
      ...employeData,
    });
    if (!employee) {
      throw new NotFoundException(`employee with id ${id} not found`);
    }
    return this.employeeRepository.save(employee);
  }

  // this is used for put method because in put we are using EmployeeDto and FindOneByid
  //     async updateEmployee2(id: number, body: EmployeeDTO): Promise<Employee> {
  //   const employee = await this.employeeRepository.findOneBy({ id });

  //   if (!employee) {
  //     throw new NotFoundException(`Employee with id ${id} not found`);
  //   }

  //   Object.assign(employee, body);

  //   return this.employeeRepository.save(employee);
  // }

  async deleteEmployee(id: number): Promise<void> {
    return this.employeeRepository.delete(id).then((result) => {
      if (result.affected === 0) {
        throw new NotFoundException(`employee with id ${id} not found`);
      }
    });
  }

  
  async search(name: string | undefined, department: string | undefined, filters: { name?: string; department?: string; }) : Promise<Employee[]>{
    const query = this.employeeRepository.createQueryBuilder('employee');

    //using query builder to search employee by name and department with case insensitive and partial match for name and exact match for department.
    if(filters.name){
      query.andWhere(`employee.name ILIKE :name`, {name : `%${filters.name}%`});
    }

    // for department we are using exact match because in real world scenario we will have fixed set of departments and we want to search employee by department with exact match.
    if(filters.department){
      query.andWhere(`employee.department = :department`, {department : `${filters.department}`});
    }

    return query.getMany();
  }

}
