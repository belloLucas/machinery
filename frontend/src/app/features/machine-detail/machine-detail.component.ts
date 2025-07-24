import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { MachineService } from '../../core/services/machine.service';
import { Machine } from '../../core/models/machine.model';
import { MachineStatus } from '../../core/models/machine-status.enum';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-machine-detail',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatChipsModule,
    MatTooltipModule,
  ],
  templateUrl: './machine-detail.component.html',
  styleUrl: './machine-detail.component.scss',
})
export class MachineDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private sanitizer = inject(DomSanitizer);
  private machineService = inject(MachineService);

  public machine: Machine | null = null;
  public isLoading = true;
  public error: string | null = null;
  public mapUrl: SafeResourceUrl | null = null;

  ngOnInit(): void {
    const machineId = this.route.snapshot.paramMap.get('id');
    if (machineId) {
      this.loadMachineDetails(machineId);
    } else {
      this.isLoading = false;
      this.error = 'ID da máquina não fornecido na URL.';
    }
  }

  loadMachineDetails(id: string): void {
    this.isLoading = true;
    this.machineService.getMachineById(id).subscribe({
      next: (data) => {
        this.machine = data;
        this.setMapUrl(data.latitude, data.longitude);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load machine details', err);
        this.error =
          'Não foi possível carregar os detalhes. Verifique se a máquina existe.';
        this.isLoading = false;
      },
    });
  }

  setMapUrl(lat: string, lon: string): void {
    const url = `https://maps.google.com/maps?q=${lat},${lon}&hl=pt&z=15&output=embed`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  goBack(): void {
    this.router.navigate(['/machines']);
  }

  getStatusColor(status: string): 'primary' | 'accent' | 'warn' {
    switch (status) {
      case MachineStatus.OPERATING:
        return 'primary';
      case MachineStatus.MAINTENANCE:
        return 'accent';
      case MachineStatus.OFF:
        return 'warn';
      default:
        return 'primary';
    }
  }
}
