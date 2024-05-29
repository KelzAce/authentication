import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from './dto/register.dto';
import {LoginDto} from './dto/login.dto'
import { UserEntity } from './entities/user.entity';
import { AuthenticationGuard } from 'src/utility/guards/authentication.guard';
import { Roles } from 'src/utility/common/user-roles.enum';
import { AuthorizeGuard } from 'src/utility/guards/authorization.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async signup(
    @Body() registerDto: RegisterDto,
  ): Promise<{ user: UserEntity, token: string }> {
    const { user, token } = await this.usersService.signup(registerDto);
    return {
      user, token
    };
  }

  @Post('signin')
  async signin(@Body() userSignInDto: LoginDto): Promise<{
    accessToken: string;
    user: UserEntity;
  }> {
    const user = await this.usersService.signin(userSignInDto);

    const accessToken = await this.usersService.accessToken(user);

    return { accessToken, user };
  }


  // @AuthorizeRoles(Roles.ADMIN)
  @UseGuards(AuthenticationGuard, AuthorizeGuard([Roles.ADMIN]))
  @Get('all')
  async findAll(): Promise<UserEntity[]> {
    return await this.usersService.findAll();
  }

  // @Get('single/:id')
  // async findOne(@Param('id') id: string): Promise<UserEntity> {
  //   return await this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }

//   @UseGuards(AuthenticationGuard)
//   @Get('me')
//   getProfile(@CurrentUser() currentUser: UserEntity) {
//     return currentUser;
//   }
}
