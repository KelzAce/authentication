import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CurrentUserMiddleware } from './utility/middlewares/current-user.middleware';
import { UsersService } from './users/users.service';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  const usersService = app.get(UsersService);
  app.use(new CurrentUserMiddleware(usersService).use);
  await app.listen(3000);
}
bootstrap();
