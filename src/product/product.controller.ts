import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from '../common/pipes/uppercase/uppercase.pipe';


@Controller('product')
export class ProductController {

    @Post('custom')
    transformName(@Body('name', new UppercasePipe())name : string){
        return {message: `${name} is transformed to uppercase`}
    }
}
