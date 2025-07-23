import { IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { MachineStatus } from '../enums/machine-status.enum';

export class CreateMachineDto {
  @ApiProperty({ example: 'Escavadeira CAT 320' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Obra Norte - Setor A' })
  @IsString()
  location: string;

  @ApiProperty({ example: '-23.5505199' })
  @IsString()
  latitude: string;

  @ApiProperty({ example: '-46.6333094' })
  @IsString()
  longitude: string;

  @ApiProperty({ enum: MachineStatus, example: MachineStatus.OPERATING })
  @IsEnum(MachineStatus)
  status: MachineStatus;
}
