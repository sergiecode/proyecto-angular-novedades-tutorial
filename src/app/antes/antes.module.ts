import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntesRoutingModule } from './antes-routing.module';
import { VariablesComponent } from './variables/variables.component';
import { SimpleComponent } from './variables/simple/simple.component';
import { ObservablesComponent } from './variables/observables/observables.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    VariablesComponent,
    SimpleComponent,
    ObservablesComponent
  ],
  imports: [
    CommonModule,
    AntesRoutingModule,
    MatTabsModule
  ]
})
export class AntesModule { }
