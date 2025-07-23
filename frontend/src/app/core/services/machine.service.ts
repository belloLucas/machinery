import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Machine } from '../models/machine.model';

@Injectable({
  providedIn: 'root',
})
export class MachineService {
  private apiUrl = environment.apiUrl + '/machines';

  constructor(private http: HttpClient) {}

  getMachines(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this.apiUrl);
  }

  getMachineById(id: string): Observable<Machine> {
    return this.http.get<Machine>(`${this.apiUrl}/${id}`);
  }

  createMachine(
    machine: Omit<Machine, 'id' | 'createdAt' | 'updatedAt'>
  ): Observable<Machine> {
    return this.http.post<Machine>(this.apiUrl, machine);
  }
}
