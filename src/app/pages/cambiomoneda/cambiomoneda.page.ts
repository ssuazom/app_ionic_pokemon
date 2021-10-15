import { Component, OnInit } from '@angular/core';
import { DivisaService } from 'src/app/services/divisa.service';

@Component({
  selector: 'app-cambiomoneda',
  templateUrl: './cambiomoneda.page.html',
  styleUrls: ['./cambiomoneda.page.scss'],
})

//export class CambiomonedaPage implements OnInit {
export class CambiomonedaPage {
  
  tipo_moneda;
  pageTitle = "PokeCambio";
  divisa;
  uf;

  toVal1:any;
  fromVal1:any;
  toVal2:any;
  fromVal2:any;

  dolar:any;
  euro:any;

  constructor(private divisaServicio: DivisaService) { 
   // this.obtenerDivisa();
  }
/*
  obtenerDivisa(){
    this.divisaServicio.obtenerUF()
      .then(respuesta => {
        console.log(respuesta);
        this.divisa = respuesta.serie;
      },
      (error) => {
        console.error(error);
      }
    );
  };
*/
 /*
getMoneda(tipo_cambio: string, fecha: string){
    this.divisaServicio.getCambio(tipo_cambio,fecha)
      .then(respuesta => {
        console.log(respuesta);
        this.divisa = respuesta.serie;
      },
      (error) => {
        console.error(error);
      }
    );

  };
*/
  /*
  getMoneda(tipo_cambio: string, fecha: string){
    this.divisaServicio.getCambio(tipo_cambio,fecha)
    .subscribe(
    res => {
      console.log(res);
      this.divisa = res
    },
    err => console.log(err)
    )
  }*/

  ngOnInit() {
    this.cambioMoneda();
    }

/*
Metodo para Formulario
*/ 
/*
  submitDivisa(valorPesos: HTMLInputElement, fecha: HTMLInputElement, tipo_moneda: string){
      console.log(fecha.value)
      console.log(tipo_moneda)
      this.getMoneda("uf",fecha.value)

    return false;
  }
  submitUF(){
      if (this.uf) {
        5000 * 30000;
     }
     else {
        50000 * 828
     }
    
     this.tipo_moneda="uf"
      console.log(this.tipo_moneda)
     this.submitDivisa;
      return false;
  }

  submitDolar(valorPesos: HTMLInputElement, fecha: HTMLInputElement){
      console.log(fecha.value)
      this.getMoneda("dolar",fecha.value)
 
    return false;
  }
*/

 async cambioMoneda(){
  this.divisaServicio.getMoneda()
  .subscribe(
    respuesta => {
      this.divisa=respuesta
      this.dolar = this.divisa.dolar.valor
      this.euro  = this.divisa.euro.valor
      console.log(this.divisa);
      console.log(this.dolar);
      console.log(this.euro);
    },
    err => console.log(err)
  ) 
 }

 dePeso(){
   this.toVal1 = this.fromVal1 / this.dolar;
 }

 aDolar(){
  this.fromVal1 = this.toVal1 * this.dolar;
 }

 dePeso2(){
  this.toVal2 = this.fromVal2 / this.euro;
}
 aEuro(){
  this.fromVal2 = this.toVal2 * this.euro;
 
}


}
