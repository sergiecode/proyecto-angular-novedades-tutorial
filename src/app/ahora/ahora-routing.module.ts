import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VariablesComponent } from './variables/variables.component';
import { TagsComponent } from './tags/tags.component';
import { InputsComponent } from './inputs/inputs.component';
import { DependenciasComponent } from './dependencias/dependencias.component';
import { ModulosComponent } from './modulos/modulos.component';
import { PizarronComponent } from './pizarron/pizarron.component';

const routes: Routes = [
  {path: 'variables', component: VariablesComponent},
  {path: 'pizarron', component: PizarronComponent},
  {path: 'inputs', component: InputsComponent},
  {path: 'dependencias', component: DependenciasComponent},
  {path: 'modulos', component: ModulosComponent},
  {path: 'tags', component: TagsComponent},
  {path: '**', redirectTo:'variables'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AhoraRoutingModule { }
