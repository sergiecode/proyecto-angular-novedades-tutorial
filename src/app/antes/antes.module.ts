import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntesRoutingModule } from './antes-routing.module';
import { VariablesComponent } from './variables/variables.component';
import { SimpleComponent } from './variables/simple/simple.component';
import { ObservablesComponent } from './variables/observables/observables.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TagsComponent } from './tags/tags.component';
import { HijoComponent } from './tags/hijo/hijo.component';
import { InputsComponent } from './inputs/inputs.component';
import { ChildComponent } from '../antes/inputs/child/child.component';
import { MatTableModule } from '@angular/material/table';
import { DependenciasComponent } from './dependencias/dependencias.component';
import { HttpClientModule } from '@angular/common/http';
import { ModulosComponent } from './modulos/modulos.component';


@NgModule({
  declarations: [
    VariablesComponent,
    SimpleComponent,
    ObservablesComponent,
    TagsComponent,
    HijoComponent,
    InputsComponent,
    ChildComponent,
    DependenciasComponent,
    ModulosComponent
  ],
  imports: [
    CommonModule,
    AntesRoutingModule,
    MatTabsModule,
    MatTableModule
  ],
  providers:[]
})
export class AntesModule { }
