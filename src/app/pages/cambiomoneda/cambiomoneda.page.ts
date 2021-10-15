import { Component, OnInit } from '@angular/core';
import { DivisaService } from 'src/app/services/divisa.service';

@Component({
  selector: 'app-cambiomoneda',
  templateUrl: './cambiomoneda.page.html',
  styleUrls: ['./cambiomoneda.page.scss'],
})

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
  }

  ngOnInit() {
    this.cambioMoneda();
    }



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
