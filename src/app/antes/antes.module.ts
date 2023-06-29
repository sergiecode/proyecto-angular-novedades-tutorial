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


@NgModule({
  declarations: [
    VariablesComponent,
    SimpleComponent,
    ObservablesComponent,
    TagsComponent,
    HijoComponent,
    InputsComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    AntesRoutingModule,
    MatTabsModule,
    MatTableModule
  ]
})
export class AntesModule { }
