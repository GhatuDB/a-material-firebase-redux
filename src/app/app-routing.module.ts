import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren:'src/app/users/users.module#UsersModule'},
  { path: 'dashboard', loadChildren:'src/app/dashboard/dashboard.module#DashboardModule'},
  { path: 'todos', loadChildren:'src/app/todos/todos.module#TodosModule'},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
