import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AhoraRoutingModule } from './ahora-routing.module';
import { VariablesComponent } from './variables/variables.component';


@NgModule({
  declarations: [
    VariablesComponent
  ],
  imports: [
    CommonModule,
    AhoraRoutingModule
  ]
})
export class AhoraModule { }
