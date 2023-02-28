import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  templateUrl: './palindromo.component.html',
  styleUrls: ['./palindromo.component.css']
})
export class PalindromoComponent{
  respal1: string= "";
  valor1: number=1;
  

  

  palindromo():void{
    //const palabra=document.getElementById("palabra").value;
    const palabra = document.getElementById("palabra1") as HTMLInputElement;
    const p1 = palabra.value;
    var p2="";

    
    for(let i = p1.length-1; i>=0; i--){
      p2+=p1[i];
    }

    if (p1==p2) {
      this.respal1 = "ES PALINDROMO"+" "+p1;
    }else{
      this.respal1 = "No es palindromo";
    }
  }
}
