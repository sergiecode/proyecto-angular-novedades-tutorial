import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent {

  nombre = signal('Angular');
  apellido = signal('Code');
  nombreCompleto = computed(() => `${this.nombre()} ${this.apellido()}`);

  a = signal(1)
  b = signal(3)
  sumaNumeros = computed(() => this.a() + this.b())

  constructor() {
    effect(() => console.log('El nombre ha cambiado:', this.nombreCompleto()));
    effect(() => console.log('El número ha cambiado:', this.sumaNumeros()));
  }

  setNombre(nuevoNombre: string) {
    this.nombre.set(nuevoNombre);
  }

  setNumero(nuevoNumero: number){
    this.a.set(nuevoNumero)
  }

}
