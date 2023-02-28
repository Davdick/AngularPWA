import { Component } from '@angular/core';

@Component({
  selector: 'app-potencia',
  templateUrl: './potencia.component.html',
  styleUrls: ['./potencia.component.css']
})
export class PotenciaComponent {
  respot1= 0;

  potencia(){
    const numr = document.getElementById("num1") as HTMLInputElement;
    var num = numr.value;
    var numCon=parseInt(num);
    var resultadoEX=0;
    var r=1;

    const potr = document.getElementById("pot1") as HTMLInputElement;
    const pot = potr.value;

    for (let i = 0; i < parseInt(pot); i++) {
      
      r=r*numCon;
      
    }
  this.respot1=r;





  }
}
