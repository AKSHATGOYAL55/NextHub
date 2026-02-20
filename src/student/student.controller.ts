import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentClassDTO } from './dto/student-create.dto';

@Controller('student')
export class StudentController {
    constructor(private readonly StudentService : StudentService){}

    @Get()
    getAllstudent(){
        return this.StudentService.getAllstudent()
    }

    @Post()
    createStudent(@Body() StudentClassDTO: StudentClassDTO){
        return this.StudentService.addStudent(StudentClassDTO)
    }
}
