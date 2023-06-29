import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnDestroy, OnInit{

  private _nombre: BehaviorSubject<any> = new BehaviorSubject<any>('Angular');
  private _numero: BehaviorSubject<any> = new BehaviorSubject<any>(1);

  nombreModificado: string = ''
  numeroModificado: number = 0

  get nombre(): any {
    return this._nombre.getValue();
  }

  set nombre(value: any) {
    this._nombre.next(value);
  }

  get numero(): any {
    return this._numero.getValue();
  }

  set numero(value: any) {
    this._numero.next(value);
  }

  nombreObservable$: Observable<any> = this._nombre.asObservable();
  private nombreSubscription?: Subscription;

  numeroObservable$: Observable<any> = this._numero.asObservable();
  private numeroSubscription?: Subscription;

  ngOnInit() {
    this.nombreSubscription = this.nombreObservable$.subscribe((nuevoNombre) => {
      console.log('El nombre ha cambiado:', nuevoNombre);
      this.nombreModificado = this.nombre + ' Code'
    });

    this.numeroSubscription = this.numeroObservable$.subscribe((nuevoNumero) => {
      console.log('El número ha cambiado:', nuevoNumero);
      this.numeroModificado = this.numero + 3
    });
  }

  ngOnDestroy() {
    if (this.nombreSubscription) {
      console.log('Se ha desuscrito')
      this.nombreSubscription.unsubscribe();
    }
  }

  cambiarNombre(data: string) {
    this.nombre = data
  }

  cambiarNumero(data: number){
    this.numero = data
  }

}
