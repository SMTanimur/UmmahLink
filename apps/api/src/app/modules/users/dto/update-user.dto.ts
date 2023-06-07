import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';
import { CreateUserDto } from './create-user-input';


export class UpdateUserDto extends PartialType (CreateUserDto) {
  @IsMongoId()
  _id: string;

}
export class BanUserDto {

  @IsMongoId()
  @ApiProperty()
  id: string;
}
