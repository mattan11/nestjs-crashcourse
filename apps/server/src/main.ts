import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TrpcRouter } from '@server/trpc/trpc.router';

console.log(process.env.PORT);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const trpc = app.get(TrpcRouter);
  trpc.applyMiddleware(app);
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
