/*
https://docs.nestjs.com/providers#services
*/

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostSchema } from './schemas';
import { Comment, CommentSchema } from './schemas/comment.schema';
import { CreatePostDto } from './dto/create-post-dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) 
    private postModel: Model<PostSchema>,
    @InjectModel(Comment.name)
     private commentModel: Model<CommentSchema>
  ) {}

  async createPost(createPostDto: CreatePostDto): Promise<string> {
    try {
      console.log(createPostDto)
      await this.postModel.create({
        author: createPostDto.author,
        desc: createPostDto.desc,
        img: createPostDto.img,
      });
      return 'Post successfully created';
    } catch (error) {
      console.log(error);
      throw new BadRequestException();
    }
  }
}
