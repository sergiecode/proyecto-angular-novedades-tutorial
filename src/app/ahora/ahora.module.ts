import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AhoraRoutingModule } from './ahora-routing.module';
import { VariablesComponent } from './variables/variables.component';
import { TagsComponent } from './tags/tags.component';
import { HijoComponent } from './tags/hijo/hijo.component';
import { InputsComponent } from './inputs/inputs.component';
import { ChildComponent } from './inputs/child/child.component';
import { MatTableModule } from '@angular/material/table';
import { RequiredComponent } from './inputs/required/required.component';
import { TransformComponent } from './inputs/transform/transform.component';
import { CondicionalComponent } from './inputs/condicional/condicional.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DependenciasComponent } from './dependencias/dependencias.component';
import { ModulosComponent } from './modulos/modulos.component';


@NgModule({
  declarations: [
    VariablesComponent,
    TagsComponent,
    HijoComponent,
    InputsComponent,
    ChildComponent,
    RequiredComponent,
    TransformComponent,
    CondicionalComponent,
    DependenciasComponent,
  ],
  imports: [
    CommonModule,
    AhoraRoutingModule,
    MatTableModule,
    MatTabsModule,

    ModulosComponent // Standalone
  ]
})
export class AhoraModule { }
