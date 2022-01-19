import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserController } from './controllers/User.controller';
import { PrismaService } from './services/Prima.service';
import { UserService } from './services/User.service';

@Module({
  imports: [AuthModule],
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class AppModule { }
