import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { MachineStatus } from './enums/machine-status.enum';

@Entity('machines')
export class Machine {
  @ApiProperty({ description: 'ID único da máquina' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'Escavadeira CAT 320' })
  @Column()
  name: string;

  @ApiProperty({ example: 'Obra Norte - Setor A' })
  @Column()
  location: string;

  @ApiProperty({ example: '-23.5505199' })
  @Column()
  latitude: string;

  @ApiProperty({ example: '-46.6333094' })
  @Column()
  longitude: string;

  @ApiProperty({ enum: MachineStatus, example: MachineStatus.OPERATING })
  @Column({ type: 'enum', enum: MachineStatus })
  status: MachineStatus;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;
}
