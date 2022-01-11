import { Module } from '@nestjs/common';
import { UserController } from './User/User.controller';

@Module({
    controllers: [UserController],
    providers: []
})
export class UserModule { }