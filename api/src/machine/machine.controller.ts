import {
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import { MachineService } from './machine.service';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';
import { FilterMachineDto } from './dto/filter-machine.dto';
import { MachineStatus } from './enums/machine-status.enum';

@Controller('machines')
export class MachineController {
  constructor(private readonly machineService: MachineService) {}

  @Post()
  @ApiOperation({ summary: 'Criar nova máquina' })
  create(@Body() dto: CreateMachineDto) {
    return this.machineService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar máquina existente' })
  update(@Param('id') id: string, @Body() dto: UpdateMachineDto) {
    return this.machineService.update(id, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as máquinas' })
  findAll(@Query() filter: FilterMachineDto) {
    return this.machineService.findAll(filter);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar máquina por ID' })
  findOne(@Param('id') id: string) {
    return this.machineService.findOne(id);
  }

  @Get('status/:status')
  @ApiOperation({ summary: 'Listar máquinas por status' })
  @ApiParam({
    name: 'status',
    enum: MachineStatus,
    description: 'Status da máquina',
  })
  findByStatus(@Param('status') status: MachineStatus) {
    return this.machineService.findAll({ status });
  }
}
