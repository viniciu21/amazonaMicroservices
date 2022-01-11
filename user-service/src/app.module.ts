import { Module } from '@nestjs/common';
import { UserModule } from './controllers/User.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
