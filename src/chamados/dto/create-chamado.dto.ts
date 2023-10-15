import { ApiProperty } from '@nestjs/swagger';

export class CreateChamadoDto {
  @ApiProperty()
  nomeAnimal: string;
  @ApiProperty({ required: true })
  idadeAnimal: string;
  @ApiProperty()
  tipoAnimal: string;
  @ApiProperty()
  descricao: string;
  @ApiProperty({ required: true })
  imagemChamado: string;
  @ApiProperty({ required: true })
  latitudeChamado: number;
  @ApiProperty()
  longitudeChamado: number;
  @ApiProperty({ required: true })
  enderecoChamado: string;
  @ApiProperty({ required: true })
  tipoChamado: string;
  @ApiProperty()
  status: string;
}
