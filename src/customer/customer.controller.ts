import { Body, Controller, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';

@Controller('customer')
export class CustomerController {
    constructor(private readonly CustomerService : CustomerService){}

    @Post()
    async createCustomer(@Body() body : Partial<Customer>): Promise<Customer>{
        return this.CustomerService.createCustomer(body)
    }
}
