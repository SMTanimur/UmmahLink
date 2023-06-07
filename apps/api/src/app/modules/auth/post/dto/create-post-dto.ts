import { PickType } from '@nestjs/swagger';
import { Post } from '../schemas';


export class CreatePostDto extends PickType(Post, [
  'author',
  'desc',
  'img'
]) {}