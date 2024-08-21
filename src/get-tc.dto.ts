import { ApiProperty } from '@nestjs/swagger';

export class GetTcDto {
  @ApiProperty({
    description: 'Número de TC del usuario',
    example: "5289700118965462",
  })
  numero_tarjeta: string;
}
