import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClasificadosResponse } from 'src/app/interfaces/articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.page.html',
  styleUrls: ['./articulo.page.scss'],
})
export class ArticuloPage implements OnInit {
  articulo: ClasificadosResponse | any;
  constructor(private route:ActivatedRoute) { 
    this.route.queryParams.subscribe(params=>{
      console.log(params);
      this.articulo=JSON.parse(params['data']);
    });
  }

  ngOnInit() {
  }

  
}
