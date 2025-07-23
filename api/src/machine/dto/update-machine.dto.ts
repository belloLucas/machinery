import { IsOptional, IsString, IsEnum } from 'class-validator';
import { MachineStatus } from '../enums/machine-status.enum';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMachineDto {
  @ApiProperty({ example: 'Escavadeira CAT 320' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ example: 'Rua 1, Centro' })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({ example: '-23.5505199' })
  @IsOptional()
  @IsString()
  latitude?: string;

  @ApiProperty({ example: '-46.6333094' })
  @IsOptional()
  @IsString()
  longitude?: string;

  @ApiProperty({ enum: MachineStatus, example: MachineStatus.OPERATING })
  @IsOptional()
  @IsEnum(MachineStatus)
  status?: MachineStatus;
}
