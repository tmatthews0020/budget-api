import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MongoClient}  from 'mongodb';


export const mongoFactory: MongoClient = () => {
  return new MongoClient('mongodb://localhost:27017');
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
