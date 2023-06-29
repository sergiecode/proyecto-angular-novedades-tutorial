import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VariablesComponent } from './variables/variables.component';
import { TagsComponent } from './tags/tags.component';
import { InputsComponent } from './inputs/inputs.component';

const routes: Routes = [
  {path: 'variables', component: VariablesComponent},
  {path: 'inputs', component: InputsComponent},
  {path: 'tags', component: TagsComponent},
  {path: '**', redirectTo:'variables'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntesRoutingModule { }
