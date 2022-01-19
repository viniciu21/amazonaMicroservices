import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { UserService } from '../services/User.service';
import { Prisma } from "@prisma/client";
import { JwtGuard } from "../data/guard/jwt-auth.guard";

@Controller('user')
export class UserController {

    constructor(
        private readonly _userService: UserService,
    ) { };

    @Post("create")
    async Create(@Body() data: Prisma.UserInfoCreateInput) {
        console.log(data);
        const user = await this._userService.createUser(data);
        // if (sallerInformation) { }
        // salvar saller infromation 
    }

    @Post('role')
    async CreateRole(@Body() data: Prisma.RoleCreateInput) {
        return await this._userService.createRole({ nameRole: "teste" });
    }

    @Get()
    async Find() {
        return await this._userService.users({});
    }

    @UseGuards(JwtGuard)
    @Get('profile')
    getProfile() {
        console.log('entrou')
        return "teste";
    }
}