import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClasificadosService {

  constructor(private http:HttpClient) { }

  getArticulos(palabra: string) {
    return this.http.get(`https://www.hostcatedral.com/api/appNoti/public/buscar/${palabra}`);
  }
}
