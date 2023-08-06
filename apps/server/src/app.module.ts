import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TrpcModule } from '@server/trpc/trpc.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [ConfigModule.forRoot(), TrpcModule, CustomersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
