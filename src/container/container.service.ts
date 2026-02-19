import { Injectable } from '@nestjs/common';

@Injectable()
export class ContainerService {

    ContainerItem=["lion", "tiger","girafee", "monkey"];

    getContainerItem(){
        return this.ContainerItem;
    }
}
