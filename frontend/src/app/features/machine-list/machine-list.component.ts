import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MachineService } from '../../core/services/machine.service';
import { Machine } from '../../core/models/machine.model';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-machine-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTooltipModule,
    MatChipsModule,
  ],
  templateUrl: './machine-list.component.html',
  styleUrl: './machine-list.component.scss',
})
export class MachineListComponent implements OnInit {
  private machineService = inject(MachineService);
  private router = inject(Router);

  public machines: Machine[] = [];
  public isLoading = true;
  public displayedColumns: string[] = ['name', 'location', 'status', 'actions'];

  ngOnInit(): void {
    this.loadMachines();
  }

  loadMachines(): void {
    this.isLoading = true;
    this.machineService.getMachines().subscribe({
      next: (data) => {
        this.machines = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load machines', err);
        this.isLoading = false;
      },
    });
  }

  navigateToDetails(id: string): void {
    this.router.navigate(['/machines', id]);
  }

  getStatusColor(status: string): 'primary' | 'accent' | 'warn' {
    switch (status) {
      case 'operating':
        return 'primary';
      case 'maintenance':
        return 'accent';
      case 'off':
        return 'warn';
      default:
        return 'primary';
    }
  }
}
