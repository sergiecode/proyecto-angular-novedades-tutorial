import { NgIf, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule, MatSlideToggleChange } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatSlideToggleModule, MatButtonModule, NgIf, NgFor],
})
export class ModulosComponent {

  list = [1,2,1]

  showTarjeta: boolean = false

  change(e: MatSlideToggleChange) {
    this.showTarjeta = e.checked
  }

}
