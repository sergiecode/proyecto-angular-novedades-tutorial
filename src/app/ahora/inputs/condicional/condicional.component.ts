import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-condicional',
  templateUrl: './condicional.component.html',
  styleUrls: ['./condicional.component.css']
})
export class CondicionalComponent {

  @Input({transform: booleanAttribute}) esEmpresa = true

}
