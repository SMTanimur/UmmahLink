import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from '../../../users/schemas';
import { IsMongoId, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Post } from './index';

export type CommentSchema = Comment & Document;
@Schema({timestamps:true})
export class Comment {

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  })
  @IsMongoId()
  @ApiProperty()
  author: User

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  })
  @ApiProperty()
  @IsMongoId()
  postId:Post

  @Prop({required:true,type:String})
  @ApiProperty()
  @IsString()
  comment:string
}

export const CommentSchema =
  SchemaFactory.createForClass(Comment);
