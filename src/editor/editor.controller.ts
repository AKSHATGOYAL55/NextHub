import { Controller, Get, Param } from '@nestjs/common';
import { EditorService } from './editor.service';

@Controller('editor')
export class EditorController {
    constructor(private readonly EditorService : EditorService){}

    @Get()
    geteditorField(){
        return this.EditorService.getediorField();
    }

    @Get(":id")
    getallfield(@Param("id") id : string){
        return this.EditorService.getallfield(Number (id))
    }
    
}

