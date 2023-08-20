import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const expressApp = express();

  const server = new ApolloServer({
    // ...other configurations...
  });

  server.applyMiddleware({ app: expressApp });

  await app.init();
  await app.listen(3005);
}
bootstrap();
