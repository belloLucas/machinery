import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Machine } from './machine.entity';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';
import { FilterMachineDto } from './dto/filter-machine.dto';

@Injectable()
export class MachineService {
  constructor(
    @InjectRepository(Machine)
    private readonly machineRepository: Repository<Machine>,
  ) {}

  async create(data: CreateMachineDto): Promise<Machine> {
    const machine = this.machineRepository.create(data);
    return await this.machineRepository.save(machine);
  }

  async update(id: string, data: UpdateMachineDto): Promise<Machine> {
    const machine = await this.machineRepository.findOne({ where: { id } });

    if (!machine) {
      throw new NotFoundException('Machine not found');
    }

    Object.assign(machine, data);
    return await this.machineRepository.save(machine);
  }

  async findAll(filter?: FilterMachineDto): Promise<Machine[]> {
    const queryBuilder = this.machineRepository.createQueryBuilder('machine');

    if (filter?.status) {
      queryBuilder.where('machine.status = :status', { status: filter.status });
    }

    return await queryBuilder.getMany();
  }

  async findOne(id: string): Promise<Machine | null> {
    return await this.machineRepository.findOne({ where: { id } });
  }
}
