import { Controller, Get, Param, ParseIntPipe, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from '../filter/http-exception/http-exception.filter';

@Controller('exception')
@UseFilters(HttpExceptionFilter)

export class ExceptionController {
   @Get("yello/:id")
   getHello(@Param("id", ParseIntPipe) id : number){
    return {message : `hello your id will be ${id}`}
   }
}