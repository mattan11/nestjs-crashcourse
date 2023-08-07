import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { CustomersService } from '@server/customers/services/customers/customers.service';
import { Request, Response } from 'express';
import { CreateCustomerDto } from '@server/customers/dtos/CreateCustomer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  getCustomers() {
    return this.customersService.getCustomers();
  }

  @Get(':id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response, // using req, res params must response with res.send() method
  ) {
    // return this.customersService.findCustomer(req.params.id);
    const customer = this.customersService.findCustomer(id);
    if (customer) {
      res.status(HttpStatus.OK).send(customer);
    } else {
      res.status(HttpStatus.NOT_FOUND).send({ msg: 'Customer not found!' });
    }
  }

  // This is a better way
  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomer(id);
    if (!customer)
      throw new HttpException('Customer not found!', HttpStatus.NOT_FOUND);

    return customer;
  }

  @Post('create')
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    this.customersService.createCustomer(createCustomerDto);
  }
}
