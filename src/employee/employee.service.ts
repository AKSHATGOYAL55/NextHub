import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
// import { EmployeeService } from './employee.service';

@Injectable()
export class EmployeeService {
    private employedetail =[
        {id : 1, name : "John", class : "A" },
        {id : 2, name : "sohn", class : "B" },
        {id : 3, name : "sohnty", class : "C" },
        {id : 4, name : "jack", class : "B" }
    ]

    getAllEmployee(){
        return this.employedetail;
    }

    getEmployeById(id: number){
       const employee =  this.employedetail.find((e)=> e.id === id)
       if(!employee) throw new NotFoundError("Employee not found")
        return employee;
    }

    //post method
    createEmploye(data: {name :  string, class : string}){
        const employee = {
            id : Date.now(),
            ...data
        }
        this.employedetail.push(employee)
        return employee
    }

    //put method
    changeemploye(id: number, data : {name : string, class : string}){
        const employee = this.employedetail.findIndex((e)=> e.id === id)
        if (employee === -1) throw new NotFoundException("Employee not found")
        this.employedetail[employee] = {id , ...data};
        return this.employedetail[employee]
    }

    //patch method
    patchemploye(id: number, data : Partial<{name : string , class: string}>){
        const employee = this.getEmployeById(id);
        Object.assign(employee , data)
        return employee;
    }

    //Delete method
    deleteemploye(id: number){
       const employee = this.employedetail.findIndex((e)=> e.id === id)
        if (employee === -1) throw new NotFoundException("Employee not found")
            const deletedEmployee = this.employedetail.splice(employee, 1)
        return {message : "Employee deleted successfully", employee : deletedEmployee[0]}
    }

}
