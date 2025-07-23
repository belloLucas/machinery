import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'machines',
    loadComponent: () =>
      import('./features/machine-list/machine-list.component').then(
        (m) => m.MachineListComponent
      ),
    title: 'Dashboard de Máquinas',
  },
  {
    path: 'machines/new',
    loadComponent: () =>
      import('./features/machine-form/machine-form.component').then(
        (m) => m.MachineFormComponent
      ),
    title: 'Cadastrar Máquina',
  },
  {
    path: 'machines/:id',
    loadComponent: () =>
      import('./features/machine-detail/machine-detail.component').then(
        (m) => m.MachineDetailComponent
      ),
    title: 'Detalhes da Máquina',
  },
  {
    path: '',
    redirectTo: '/machines',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/machines',
  },
];
