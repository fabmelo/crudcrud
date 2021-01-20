// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { RegisterFormComponent } from './module/register-form/register-form.component';
import { RegisterListComponent } from './module/register-list/register-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register-list',
    pathMatch: 'full'
  },
  {
    path: 'register-list',
    component: RegisterListComponent
  },
  {
    path: 'register-form',
    component: RegisterFormComponent
  },
  {
    path: 'register-form/:id',
    component: RegisterFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
