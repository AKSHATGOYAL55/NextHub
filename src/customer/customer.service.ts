import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private CustomerRepository : Repository <Customer>
    ){}

    async createCustomer(CustomerData : Partial<Customer>) : Promise<Customer>{
        const Customer = this.CustomerRepository.create(CustomerData);
        return this.CustomerRepository.save(Customer);
    }
}
 