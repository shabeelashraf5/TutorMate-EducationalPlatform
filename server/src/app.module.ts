import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
  }), MongooseModule.forRootAsync({

    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      uri: configService.get<string>('DATABASE_URI'),
      dbName: configService.get<string>('DATABASE_NAME')
    })
  }),

  AuthModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

