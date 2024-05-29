import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './entities/user.schema';
import { AuthenticationGuard } from 'src/utility/guards/authentication.guard';
import { Roles } from 'src/utility/common/user-roles.enum';
import { RolesGuard } from 'src/utility/guards/roles.guard';
import { RolesDecorator } from 'src/utility/decorator/roles.decorator';

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

  @Get('all')
  @UseGuards(AuthenticationGuard, RolesGuard)
  @RolesDecorator(Roles.ADMIN)
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
