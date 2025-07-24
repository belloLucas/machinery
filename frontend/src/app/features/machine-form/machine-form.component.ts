import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MachineService } from '../../core/services/machine.service';
import { MachineStatus } from '../../core/models/machine-status.enum';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-machine-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './machine-form.component.html',
  styleUrl: './machine-form.component.scss',
})
export class MachineFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private machineService = inject(MachineService);
  private snackBar = inject(MatSnackBar);

  public machineForm!: FormGroup;
  public machineStatusOptions = Object.values(MachineStatus);
  public isSubmitting = false;

  ngOnInit(): void {
    this.machineForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      location: ['', [Validators.required, Validators.maxLength(200)]],
      latitude: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/
          ),
        ],
      ],
      longitude: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/
          ),
        ],
      ],
      status: [MachineStatus.OFF, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.machineForm.invalid) {
      this.machineForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.machineService.createMachine(this.machineForm.value).subscribe({
      next: () => {
        this.snackBar.open('Máquina cadastrada com sucesso!', 'Fechar', {
          duration: 3000,
          panelClass: 'success-snackbar',
        });
        this.router.navigate(['/machines']);
      },
      error: (err) => {
        console.error('Failed to create machine', err);
        this.snackBar.open(
          'Erro ao cadastrar máquina. Tente novamente.',
          'Fechar',
          {
            duration: 5000,
            panelClass: 'error-snackbar',
          }
        );
        this.isSubmitting = false;
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/machines']);
  }
}
