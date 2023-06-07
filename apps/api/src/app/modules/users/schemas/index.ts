import * as bcrypt from 'bcrypt';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export enum EGender {
  male = 'male',
  female = 'female',
  unspecified = 'unspecified'
}



export interface InfoDocument
  extends Document,
    mongoose.Types.Subdocument,
    Info {}

@Schema()
export class Info {
 @Prop()
 @IsOptional()
 @IsString()
 @ApiPropertyOptional()
 bio?: string;

  @Prop()
  @IsOptional()
  @ApiPropertyOptional()
  birthday?: Date
 
  @IsOptional()
  @ApiPropertyOptional()
  @Prop({enum:EGender}) 
  gender?: EGender
}

export const InfoSchema = SchemaFactory.createForClass(Info);
@Schema({ timestamps: true })
export class User {
  @Prop()
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  fullName: string;
  
  
  @Prop({ required: true, unique: true, trim: true, lowercase: true })
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;
  
  
  @Prop({ required: true, trim: true })
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @MinLength(6)
  password: string;

  @Prop({ type: InfoSchema })
  @IsOptional()
  @ApiPropertyOptional()
  info?: Info;
  
  @Prop({ type: mongoose.Types.ObjectId, ref: 'User' })
  @IsOptional()
  @ApiPropertyOptional()
  following?: User[]
  
  
  @Prop({ type: mongoose.Types.ObjectId, ref: 'User'})
  @IsOptional()
  @ApiPropertyOptional()
  followers?: User[]
  
  
  // @Prop({ type: 'string', maxlength: 200 })
  // @IsOptional()
  // @ApiPropertyOptional()
  // bio?: string;
  
  @Prop({
    default:
      'https://res.cloudinary.com/dk6bdrkbv/image/upload/v1658841812/mushfiqTanim/user_qcrqny_kcgfes.svg',
  })
  @IsOptional()
  @ApiPropertyOptional()
  avatar: string;
  
  @Prop()
  @IsOptional()
  @ApiPropertyOptional()
  banner?:string
  
  @Prop({ required: true, unique: true })
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username: string;
  
  
  @Prop({
    enum: ['admin', 'user'],
    default: 'user',
  })
  @ApiProperty()
  @IsNotEmpty({ message: 'Role is required' })
  @IsString()
  role: string;
}

export interface UserDocument extends User, Document {
  comparePassword?(password: string): Promise<boolean>;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  const user = this as UserDocument;
  return await bcrypt.compare(password, user.password);
};




