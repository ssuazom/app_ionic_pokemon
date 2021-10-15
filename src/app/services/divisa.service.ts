import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { rejects } from 'assert';
//import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class DivisaService {

  URI: string = '';
  urlDivisa = 'https://mindicador.cl/api/uf/13-10-2021';
  constructor(private httpCliente: HttpClient) { 
    this.URI = `https://mindicador.cl/api/`
  }

  //Nos permite ir a buscar los datos y ejercutar funciones en forma sincrona
  obtenerUF(): Promise <any> {
    return new Promise ((resolve,reject) => {
      this.httpCliente.get(this.urlDivisa)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });
  }

  /*getCambio(tipo_cambio: string, fecha: string) {
    return this.httpCliente.get(`${this.URI}${tipo_cambio}/${fecha}`)
  }*/
  getCambio(tipo_cambio: string, fecha: string): Promise <any> {
    return new Promise ((resolve,reject) => {
      this.httpCliente.get(`${this.URI}${tipo_cambio}/${fecha}`)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });
  }
  getMoneda(){
    console.log(this.URI)
    return this.httpCliente.get(`${this.URI}`)
  }
}
