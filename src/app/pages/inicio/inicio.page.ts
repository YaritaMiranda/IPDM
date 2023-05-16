import { Component, OnInit } from '@angular/core';
import { ClasificadosService } from 'src/app/services/clasificados.service';
import { ClasificadosResponse } from '../../interfaces/articulo';
import { NavigationExtras, Route, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  articulos: ClasificadosResponse[] = [];
  palabra: string = '';

  constructor(private router:Router, private serviceClasificados: ClasificadosService) {}

  ngOnInit() {
  }

  buscar() {
    this.serviceClasificados.getArticulos(this.palabra)
      .subscribe((resp) => {
        console.log(resp);
        this.articulos = resp as ClasificadosResponse[];
      });
  }
  
  irAlArticulo(articulo:ClasificadosResponse){
    const extras: NavigationExtras={
      queryParams: {
        data: JSON.stringify(articulo)
      }
    }
    this.router.navigate(['../articulo'], extras )
  }
}
