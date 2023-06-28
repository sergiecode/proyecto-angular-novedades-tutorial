import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ahora', loadChildren: () => import('./ahora/ahora.module').then(m => m.AhoraModule) },
  { path: 'antes', loadChildren: () => import('./antes/antes.module').then(m => m.AntesModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
