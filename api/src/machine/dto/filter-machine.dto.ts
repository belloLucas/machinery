import { ApiProperty } from '@nestjs/swagger';
import { MachineStatus } from '../enums/machine-status.enum';
import { IsEnum, IsOptional } from 'class-validator';

export class FilterMachineDto {
  @ApiProperty({
    description: 'Filtrar por status da máquina',
    enum: MachineStatus,
    example: MachineStatus.OPERATING,
    required: false,
  })
  @IsOptional()
  @IsEnum(MachineStatus)
  status?: MachineStatus;
}
