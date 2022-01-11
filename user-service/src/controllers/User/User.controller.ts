import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserDto } from './Dto/User.dto';

@Controller('user')
export class UserController {

    @Post()
    Create() {
        console.log('teste');
    }

    @Get()
    Find() {
        return { teste: 'true' };
    }
}