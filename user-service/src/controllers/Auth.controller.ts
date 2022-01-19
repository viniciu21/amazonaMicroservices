import { RoleGuard } from '../auth/role.guard';
import { JwtGuard } from '../auth/auth/jwt.guard';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from '../auth/auth/auth.service';
import { Role } from '../auth/role.decorator';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  async login(@Body() body) {
    return { token: await this.authService.login(body.username, body.password) };
  }

  //@Role('admin')
  @UseGuards(JwtGuard)
  @Get('test-auth')
  test(@Req() req) {
    console.log(req.user);
    return {
      name: 'Luiz Carlos',
    };
  }
}
