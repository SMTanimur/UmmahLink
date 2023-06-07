/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersRepository: UsersService) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async validateUser(loginDto: LoginDto): Promise<any> {
    return await this.usersRepository.validateUser(loginDto)
  }
}
