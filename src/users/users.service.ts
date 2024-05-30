import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signup(
    registerDto: RegisterDto,
  ): Promise<{ user: User; token: string }> {

    const {username, password} = registerDto

    const hashedPassword = await hash(password, 10);

    const user = await this.userModel.create({
      username,
      password: hashedPassword
    })
    
    const token = this.jwtService.sign({id: user._id})

    return { user, token };
  }

  async signin(loginDto: LoginDto): Promise<{ user: User; token: string }> {
    const {username, password} = loginDto;

    const user = await this.userModel.findOne({username})

    if(!user) {
      throw new UnauthorizedException('Invalid username or password')
    }

    const matchPassword = await compare(password, user.password);

    if (!matchPassword) {
      throw new UnauthorizedException('Bad Credentials');
    }

   const token = this.jwtService.sign({id: user._id})

    return { user, token };
  }
}
