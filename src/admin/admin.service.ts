import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
    private adminProduct = [{
        id: 1, name : "chair", price : "1000"},
       { id: 2, name : "table", price : "7000"},
        {id: 3, name : "fan", price : "5000"},
    ];
    getAlladminProduct(){
        return this.adminProduct;
    };
    getadminProductbyid(id:number){
        return this.adminProduct.find((product)=> product.id === id)
    }
}
