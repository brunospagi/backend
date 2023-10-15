import { Module } from '@nestjs/common';
import { ChamadosService } from './chamados.service';
import { ChamadosController } from './chamados.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ChamadosController],
  providers: [ChamadosService],
  imports: [PrismaModule],
})
export class ChamadosModule {}
