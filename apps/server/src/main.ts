import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const trpc = app.get('TrpcRouter');
  trpc.applyMiddleware(app)
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
