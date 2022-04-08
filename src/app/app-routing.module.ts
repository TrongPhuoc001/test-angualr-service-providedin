import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./module1/module1.module').then(m => m.Module1Module)
  },
  {
    path: 'm2',
    loadChildren: () => import('./module2/module2.module').then(m => m.Module2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
