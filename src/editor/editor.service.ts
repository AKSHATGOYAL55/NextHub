import { Injectable } from '@nestjs/common';

@Injectable()
export class EditorService {
    private editorField = [
        {id: 1, name : "roll" , status : "pending"},
        {id: 2, name : "image" , status : "done"},
        {id: 3, name : "video" , status : "pending"},
        {id: 4, name : "submit " , status : "pending"},
    ]

    getediorField(){
        return this.editorField;
    }
    getallfield(id : number){
        return this.editorField.find((field)=> field.id === id)
    }
}

