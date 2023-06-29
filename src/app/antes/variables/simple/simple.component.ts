import { Component } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent {

  a: number = 1
  b: number = 3
  c: number = this.a + this.b
  
  texto: string = 'Angular'
  masTexto: string = 'Clase Viernes'
  concatenado: string = this.texto + this.masTexto

  cambiarNumero(){
    this.a = 5
  }

  cambiarTexto(){
    this.texto = 'Sergie '
  }

}
