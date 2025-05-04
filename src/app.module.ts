import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { InvoicesModule } from './invoices/invoices.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [AuthModule, InvoicesModule, PrismaModule],
})
export class AppModule {}
