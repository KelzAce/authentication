import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
  ) {}

  async signup(registerDto: RegisterDto): Promise<{user: UserEntity; token: string}> {
    const userExists = await this.findUserByUsername(registerDto.username);

    if (userExists) {
      throw new BadRequestException('Username is not available');
    }

    registerDto.password = await bcrypt.hash(registerDto.password, 10);

    let user = this.usersRepository.create(registerDto);

    user = await this.usersRepository.save(user);

    const payload = { username: user.username, sub: user.id };
    const token = this.jwtService.sign(payload);

    return { user, token };
  }
  // }

  async signin(userSignInDto: LoginDto): Promise<UserEntity> {
    const userExists = await this.usersRepository
      .createQueryBuilder('users')
      .addSelect('users.password')
      .where('users.username=:email', { username: userSignInDto.username })
      .getOne();

    if (!userExists) {
      throw new BadRequestException('Bad Credentials');
    }

    const matchPassword = await compare(
      userSignInDto.password,
      userExists.password,
    );

    if (!matchPassword) {
      throw new BadRequestException('Bad Credentials');
    }

    delete userExists.password;

    return userExists;
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.usersRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('User Not Found. ');
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findUserByUsername(username: string) {
    return await this.usersRepository.findOneBy({ username });
  }

  async accessToken(user: UserEntity): Promise<string> {
    return sign(
      {
        id: user.id,
        username: user.username,
      },
      process.env.ACCESS_TOKEN_SECRET_KEY,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRE_IN },
    );
  }
}
