import { MachineStatus } from '../models/machine-status.enum';

export interface UpdateMachineDto {
  name?: string;
  location?: string;
  latitude?: string;
  longitude?: string;
  status?: MachineStatus;
  geocodeLocation?: boolean;
}
