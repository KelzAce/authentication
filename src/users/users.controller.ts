import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './schemas/user.schema';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async signup(
    @Body() registerDto: RegisterDto,
  ): Promise<{ user: User; token: string }> {
    const { user, token } = await this.usersService.signup(registerDto);
    return { user, token };
  }

  @Post('login')
  async signin(
    @Body() loginDto: LoginDto,
  ): Promise<{ user: User; token: string }> {
    const { user, token } = await this.usersService.signin(loginDto);
    return { user, token };
  }


}
