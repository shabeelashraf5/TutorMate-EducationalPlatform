import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AuthModule, MongooseModule.forRoot('mongodb+srv://shabeelash5:wGzEMe0qZvBVAgN6@cluster0.kfyrp1e.mongodb.net/?retryWrites=true&w=majority',
    {dbName: 'tutorme'}
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
