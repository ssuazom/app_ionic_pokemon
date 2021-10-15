import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { rejects } from 'assert';
//import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class DivisaService {

  URI: string = '';
  constructor(private httpCliente: HttpClient) { 
    this.URI = `https://mindicador.cl/api/`
  }

  getMoneda(){
    console.log(this.URI)
    return this.httpCliente.get(`${this.URI}`)
  }
}
