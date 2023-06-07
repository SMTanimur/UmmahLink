/*
https://docs.nestjs.com/providers#services
*/

import {  Injectable, NotFoundException, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';

import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';
import { createHash } from '../../utils/hash';
import { User, UserDocument } from './schemas';
import { CreateUserDto } from './dto/create-user-input';
import { UpdateUserDto } from './dto/update-user.dto';
import { omit, pick } from 'lodash';
import { LoginDto } from '../auth/dto/login.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(createUserDto: CreateUserDto) {
    await this.validateCreateUserRequest(createUserDto);
    createUserDto.password = await createHash(createUserDto.password);
    const user = await this.userModel.create(createUserDto);
    return omit(user.toJSON(), ['password']);
    // return 'Account has been created' ;
  }

  private async validateCreateUserRequest(createUserDto: CreateUserDto) {
    let user: UserDocument;
    try {
      user = await this.userModel.findOne({
        email: createUserDto.email,
      });
    } catch (err) {
      console.error(err.message);
    }

    if (user) {
      throw new UnprocessableEntityException('User already exists.');
    }
  }

  async updateUser(updateUserDto: UpdateUserDto) {
    
    const userData = await this.userModel.findOneAndUpdate(
      { _id: updateUserDto._id },
      updateUserDto
    );

    return {
      message:  'Account information updated',
      user: userData,
    };
  }

  async validatePassword(userId: string, password: string):Promise<boolean> {
    const user = await this.findOne({_id:userId})
    if (!(await user.comparePassword(password)))
      throw new UnauthorizedException('The password you entered is incorrect.');
    return true;
  }

  async validateUser(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.findOne({ email});

    if (!user) throw new NotFoundException('There is no user with this email.');

    if (!(await user.comparePassword(password))) {
      throw new UnauthorizedException('The password you entered is incorrect.');
    }
  

    return pick(user.toJSON(), [
      '_id',
      'username',
      'email',
      'fullname',
      'role',
      'avatar',
    ]);
  }

  async findOne(query: object): Promise<UserDocument> {
    const user = await this.userModel.findOne(query);

    if (!user) return null;

    return user;
  }

 
  async findSingleUser(userId: string) {
    const user = await this.userModel.findOne({ _id: userId });
    return pick(user, ['fullname', '_id', 'email', 'username', 'phone', 'avatar']);
  }

  async deleteUser(userId: string) {
    this.userModel.findOneAndRemove({ _id: userId });
    return 'Account has been deleted';
  }
}
