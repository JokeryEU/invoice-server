import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [AuthModule, InvoicesModule, PrismaModule],
})
export class AppModule {}
