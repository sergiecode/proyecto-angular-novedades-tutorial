import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntesRoutingModule } from './antes-routing.module';
import { VariablesComponent } from './variables/variables.component';


@NgModule({
  declarations: [
    VariablesComponent
  ],
  imports: [
    CommonModule,
    AntesRoutingModule
  ]
})
export class AntesModule { }
