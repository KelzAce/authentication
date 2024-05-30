import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { User } from './entities/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signup(
    registerDto: RegisterDto,
  ): Promise<{ user: User; token: string }> {
    const userExists = await this.userModel.findOne({
      username: registerDto.username,
    });

    if (userExists) {
      throw new BadRequestException('Username already exist');
    }

    const hashedPassword = await hash(registerDto.password, 10);
    const createdUser = new this.userModel({
      ...registerDto,
      password: hashedPassword,
    });

    const user = await createdUser.save();
    const token = this.jwtService.sign({
      username: user.username,
      sub: user._id,
    });

    return { user, token };
  }

  async signin(loginDto: LoginDto): Promise<{ user: User; token: string }> {
    const user = await this.userModel
      .findOne({ username: loginDto.username })
      .select('+password');

    if (!user) {
      throw new BadRequestException('Bad Credentials');
    }

    const matchPassword = await compare(loginDto.password, user.password);

    if (!matchPassword) {
      throw new BadRequestException('Bad Credentials');
    }

    user.password = undefined;
    const token = this.jwtService.sign({
      username: user.username,
      sub: user._id,
    });

    return { user, token };
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(username: string): Promise<User> {
    const user = await this.userModel.findById(username).exec();

    if (!user) {
      throw new NotFoundException('User Not Found');
    }

    return user;
  }
}
