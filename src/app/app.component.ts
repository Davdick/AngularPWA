import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre1 = 'David ';
  nombre2= 'Alejandro';
  edad = 19;
  email = 'kak@k.com';
  sueldos = [100, 200, 300];
  activo = true;
  result: string = '';
  respal: string= "";
  respot= 0;
  
  buttonClick(value: string): void {
    
      
      
      this.result += value;

  }

  calculate() {
    try {
      this.result = eval(this.result);
    } catch (error) {
      this.result = 'Error';
    }
  }

  clear(): void {
    this.result = '';
  }

  palindromo():void{
    //const palabra=document.getElementById("palabra").value;
    const palabra = document.getElementById("palabra") as HTMLInputElement;
    const p1 = palabra.value;
    var p2="";

    
    for(let i = p1.length-1; i>=0; i--){
      p2+=p1[i];
    }

    if (p1==p2) {
      this.respal = "ES PALINDROMO"+" "+p1;
    }else{
      this.respal = "No es palindromo";
    }
  }
  potencia(){
    const numr = document.getElementById("num") as HTMLInputElement;
    var num = numr.value;
    var numCon=parseInt(num);
    var resultadoEX=0;
    var r=1;

    const potr = document.getElementById("pot") as HTMLInputElement;
    const pot = potr.value;

    for (let i = 0; i < parseInt(pot); i++) {
      
      r=r*numCon;
      
    }
  this.respot=r;





  }
}
