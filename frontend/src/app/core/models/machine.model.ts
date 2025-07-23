import { MachineStatus } from './machine-status.enum';

export interface Machine {
  id: string;
  name: string;
  location: string;
  latitude: string;
  longitude: string;
  status: MachineStatus;
  createdAt: Date;
  updatedAt: Date;
}
