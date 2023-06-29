import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-dependencias',
  templateUrl: './dependencias.component.html',
  styleUrls: ['./dependencias.component.css']
})
export class DependenciasComponent implements OnInit {

  data: any[] = []

  constructor(private servicio: ServicioService) { }
  ngOnInit(): void {
    this.obtenerDatos()
  }

  obtenerDatos() {
    this.servicio.getDatos().subscribe({
      next: (res: any) => {
        console.log(res)
        this.data = res
      }
    })
  }

}
