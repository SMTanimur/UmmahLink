
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray,  IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';
import { User } from '../../../users/schemas';
import { Comment } from './comment.schema';

export type PostSchema = Post & Document

@Schema({ timestamps: true })
export class Post {

  @Prop({ type: mongoose.Types.ObjectId, ref: 'User'})
  author: User
  
  @Prop({ required: true })
  @IsNotEmpty()
  @ApiProperty()
  desc: string;
  
  
  @Prop({ type:[String] })
  @IsOptional()
  @ApiPropertyOptional({type:[String]})
  img?:string[]


  @Prop({ type:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  @IsOptional()
  @ApiPropertyOptional()
  likes?: User[]

  @IsMongoId({ each: true })
  @IsArray()
  @IsOptional()
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
  comments:Comment[]
}


export const PostSchema = SchemaFactory.createForClass(Post);