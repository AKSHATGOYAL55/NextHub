import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentClassDTO } from './dto/student-create.dto';
import { AuthGuard } from '../guard/auth/auth.guard';

@Controller('student')
export class StudentController {
    constructor(private readonly StudentService : StudentService){}

    @Get()
    @UseGuards(AuthGuard)
    getAllstudent(){
        return this.StudentService.getAllstudent()
    }

    @Post()
    createStudent(@Body() StudentClassDTO: StudentClassDTO){
        return this.StudentService.addStudent(StudentClassDTO)
    }
}
