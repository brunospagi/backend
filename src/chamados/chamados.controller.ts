import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChamadosService } from './chamados.service';
import { CreateChamadoDto } from './dto/create-chamado.dto';
import { UpdateChamadoDto } from './dto/update-chamado.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('chamados')
@ApiTags('Chamados')
@ApiResponse({ status: 200, description: 'OK' })
@ApiResponse({ status: 400, description: 'Bad Request' })
@ApiResponse({ status: 404, description: 'Not Found' })
@ApiResponse({ status: 500, description: 'Internal Server Error' })
export class ChamadosController {
  constructor(private readonly chamadosService: ChamadosService) {}
  @Post('criar')
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiOperation({ summary: 'Rota Responsavel Por Criar Um Novos Chamado' })
  create(@Body() createChamadoDto: CreateChamadoDto) {
    return this.chamadosService.create(createChamadoDto);
  }

  @Get('listar-todos')
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiOperation({ summary: 'Rota Responsavel Por Listar Todos Os Chamado' })
  findAll() {
    return this.chamadosService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiOperation({ summary: 'Rota Responsavel Por Listar Um  Unico Chamado' })
  findOne(@Param('id') id: string) {
    return this.chamadosService.findOne(+id);
  }

  @Patch('atualizar/:id')
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiOperation({ summary: 'Rota Responsavel Por Atualizar Um Chamado' })
  update(@Param('id') id: string, @Body() updateChamadoDto: UpdateChamadoDto) {
    return this.chamadosService.update(+id, updateChamadoDto);
  }

  @Delete('deletar/:id')
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiOperation({ summary: 'Rota Responsavel Por Deletar Um Chamado' })
  remove(@Param('id') id: string) {
    return this.chamadosService.remove(+id);
  }
}
