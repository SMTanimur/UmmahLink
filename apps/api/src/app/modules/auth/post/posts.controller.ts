/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, UseGuards, Post as post, Body, Req } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Post } from './schemas';
import { PostsService } from './posts.service';
import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { CreatePostDto } from './dto/create-post-dto';

@ApiTags(Post.name)
@Controller({ path: 'posts', version: '1' })
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOperation({ summary: 'Create a new Post' })
  @ApiCreatedResponse({ description: 'Post successfully created' })
  @UseGuards(AuthenticatedGuard)
  @post('')
  async createPost(
    @Body() createPostDto: CreatePostDto,
    @Req() req: any
  ): Promise<any> {
    console.log(req?.user?._id);
    createPostDto.author = req?.user?._id;
    return await this.postsService.createPost(createPostDto);
  }
}
