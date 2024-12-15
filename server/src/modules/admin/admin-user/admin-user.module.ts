import { Module } from '@nestjs/common';
import { AdminUserController } from './admin-user.controller';
import { AdminUserService } from './providers/admin-user/admin-user.service';
import { Admin, AdminSchema } from './schemas/admin-user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/modules/users/schemas/user.schema';

@Module({
  controllers: [AdminUserController],
  providers: [AdminUserService],
  exports: [AdminUserService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Admin.name,
        schema: AdminSchema,
      },
    ]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})
export class AdminUserModule {}
