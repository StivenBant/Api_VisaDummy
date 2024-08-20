import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto {
  @ApiProperty({
    description: 'Número de TC del usuario',
    example: "2882491615033",
  })
  card_number: string;
}
