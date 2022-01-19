import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/services/Prima.service';
import { UserService } from 'src/services/User.service';
import { AuthController } from '../controllers/Auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'abcd123456',
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategyService, UserService, PrismaService],
})
export class AuthModule { }
