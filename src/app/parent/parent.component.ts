import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
inputText:string=''
destroy:boolean=false


  constructor(){

  }
  sumitVal(input:HTMLInputElement){
    this.inputText=input.value;


  }
  destroyComponent(){
    this.destroy=true
  }


  

}
