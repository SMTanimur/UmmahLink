import { PickType } from '@nestjs/swagger';
import { User } from '../schemas';

export class CreateUserDto extends PickType(User, [
  'email',
  'username',
  'password',
  'info'
]) {}
