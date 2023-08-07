import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '@server/customers/dtos/CreateCustomer.dto';
import { Customer } from '@server/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'user1@test.pl',
      name: 'user1',
    },
    {
      id: 2,
      email: 'user2@test.pl',
      name: 'user2',
    },
    {
      id: 3,
      email: 'user3@test.pl',
      name: 'user3',
    },
    {
      id: 4,
      email: 'user4@test.pl',
      name: 'user4',
    },
  ];

  getCustomers() {
    return this.customers;
  }

  findCustomer(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }
}
