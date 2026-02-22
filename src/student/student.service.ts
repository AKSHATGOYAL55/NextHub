import { Injectable } from '@nestjs/common';
import { student } from './interfaces/student.interface';
import { StudentClassDTO } from './dto/student-create.dto';

@Injectable()
export class StudentService {
    private students : student [] = []

    getAllstudent() : student[]{
        return this.students;
    }

    addStudent(StudentClassDTO : StudentClassDTO) : 
    student{
        const newStudent : student ={
            id : Date.now(),
            ...StudentClassDTO,
        };
        this.students.push(newStudent)
        return newStudent;
    }
}
