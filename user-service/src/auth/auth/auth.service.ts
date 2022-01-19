import { Injectable } from '@nestjs/common';
import { UserService } from '../../services/User.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly _userService: UserService,
    private jwtService: JwtService
  ) {

  }

  async validateUser(userName: string, pass: string): Promise<any> {
    const user = await this._userService.user(
      { userName }
    );
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(username: string, password: string) {
    const user = await this.validateUser(username, password);
    const payload = { user };
    return this.jwtService.sign(payload);
  }
}
