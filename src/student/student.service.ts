import { Injectable } from '@nestjs/common';
import { student } from './interfaces/student.interface';
import { StudentClassDTO } from './dto/student-create.dto';

@Injectable()
export class StudentService {
    private student : student [] = []

    getAllstudent() : student[]{
        return this.student;
    }

    addStudent(StudentClassDTO : StudentClassDTO) : 
    student{
        const newStudent : student ={
            id : Date.now(),
            ...StudentClassDTO
        };
        this.student.push(newStudent)
        return newStudent;
    }
}
