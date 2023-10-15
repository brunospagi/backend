import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChamadosModule } from './chamados/chamados.module';

@Module({
  imports: [ChamadosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
