import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pizarron',
  templateUrl: './pizarron.component.html',
  styleUrls: ['./pizarron.component.css']
})
export class PizarronComponent {

  array = signal<Array<number>>([1, 2, 3])

  arrayObjetos = signal<Array<any>>([
    { nombre: 'Sergie Code', tecnologia: 'Angular' },
    { nombre: 'Pedro Picapiedra', tecnologia: 'Cobol' },
  ])

  realizarAccion() {
    this.array.update(a => [...a, 4])
    console.log(this.array())



  }

  realizarAccion2() {
    this.arrayObjetos.mutate(usuario => {
      usuario[0].tecnologia = 'Angular con Signals'
    })
  }

}
