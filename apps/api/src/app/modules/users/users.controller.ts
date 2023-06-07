import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { User } from './schemas';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { CreateUserDto } from './dto/create-user-input';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags(User.name)
@Controller({ path: 'users', version: '1' })
export class UsersController {
  constructor(private readonly userService: UsersService) {}

 
  @ApiOperation({ summary: 'User get his Profile' })
  @ApiOkResponse({ description: 'success' })
  @Get('me')
  @UseGuards(AuthenticatedGuard)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async profile(@Req() req: any) {
    const user = await this.userService.findSingleUser(req?.user?._id );
    delete user.password;
    return user;
  }

  @ApiOperation({ summary: 'Update user' })
  @ApiCreatedResponse({ description: 'User successfully updated' })
  @UseGuards(AuthenticatedGuard)
  @Patch()
  async updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @Req() req: any
  ): Promise<any> {
    updateUserDto._id = req?.user?._id;
    return await this.userService.updateUser(updateUserDto);
  }
}
