import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS with specific options
  const corsOptions: CorsOptions = {
    origin: '*', // You can replace '*' with your frontend domain
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type',
  };
  app.enableCors(corsOptions);

  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(8888);
}

bootstrap();
