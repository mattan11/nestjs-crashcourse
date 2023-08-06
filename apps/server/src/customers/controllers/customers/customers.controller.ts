import { Controller, Get } from '@nestjs/common';
import { CustomersService } from '@server/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get('')
  getCustomer() {
    return this.customersService.findCustomer();
  }
}
