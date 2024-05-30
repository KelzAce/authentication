import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb+srv://ikechigreat:rXaU7cqTQ6KNYs4w@cluster0.3e6rmgc.mongodb.net/'),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
