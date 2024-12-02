import { Module } from '@nestjs/common';
import { CommsController } from './api/controllers/comms/comms.controller';
import { CommsService } from './api/services/comms.service';

@Module({
  imports: [],
  controllers: [CommsController],
  providers: [CommsService],
})
export class AppModule {}
