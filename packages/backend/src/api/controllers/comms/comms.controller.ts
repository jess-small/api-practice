import {
  Controller,
  Get,
  Param,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CommsService } from 'src/api/services/comms.service';

@Controller('comms')
export class CommsController {
  constructor(private readonly commsService: CommsService) {}

  @Get('your-next-delivery/:userId')
  async getNextDelivery(@Param('userId') userId: string) {
    try {
      const userData = await this.commsService.getNextDelivery(userId);

      if (!userData) {
        throw new NotFoundException('User not found');
      }

      return userData;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(
        'An error occurred while fetching user data',
      );
    }
  }
}
