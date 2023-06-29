import { Component, OnInit, inject } from '@angular/core';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-dependencias',
  templateUrl: './dependencias.component.html',
  styleUrls: ['./dependencias.component.css']
})
export class DependenciasComponent implements OnInit {
  
  data: any[] = []
  
  private servicio = inject(ServicioService)
  
  
  ngOnInit(): void {
    this.obtenerDatos()
  }
  
  obtenerDatos() {
    this.servicio.getDatos().subscribe({
      next: (res: any) => {
        this.data = res
      }
    })
  }

}
