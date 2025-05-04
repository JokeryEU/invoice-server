import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('invoice')
@UseGuards(JwtAuthGuard)
export class InvoicesController {
  constructor(private service: InvoicesService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }
}
