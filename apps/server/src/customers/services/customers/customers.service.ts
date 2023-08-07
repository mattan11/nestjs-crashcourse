import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private users = [
    {
      id: 1,
      email: 'user1@test.pl',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'user2@test.pl',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'user3@test.pl',
      createdAt: new Date(),
    },
    {
      id: 4,
      email: 'user4@test.pl',
      createdAt: new Date(),
    },
  ];

  findCustomer(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
