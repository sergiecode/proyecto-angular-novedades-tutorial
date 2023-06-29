import { Component, Input, booleanAttribute } from '@angular/core';
import { PeriodicElement } from '../model/periodic-element.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  @Input({required:true}) dataSource: PeriodicElement[] = []
}
