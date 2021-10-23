import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 8080
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  await app.listen(port);
  Logger.log(`Server is running at ${port}`, 'Bootstrap')
}
bootstrap();
