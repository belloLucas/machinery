import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Machine } from '../models/machine.model';
import { UpdateMachineDto } from '../dto/UpdateMachineDTO';

@Injectable({
  providedIn: 'root',
})
export class MachineService {
  private apiUrl = environment.apiUrl + '/machines';

  constructor(private http: HttpClient) {}

  getMachines(status?: string): Observable<Machine[]> {
    let params = new HttpParams();
    if (status) {
      params = params.append('status', status);
    }

    return this.http.get<Machine[]>(this.apiUrl, { params });
  }

  getMachineById(id: string): Observable<Machine> {
    return this.http.get<Machine>(`${this.apiUrl}/${id}`);
  }

  createMachine(
    machine: Omit<Machine, 'id' | 'createdAt' | 'updatedAt'>
  ): Observable<Machine> {
    return this.http.post<Machine>(this.apiUrl, machine);
  }

  updateMachine(id: string, machine: UpdateMachineDto): Observable<Machine> {
    return this.http.patch<Machine>(`${this.apiUrl}/${id}`, machine);
  }
}
