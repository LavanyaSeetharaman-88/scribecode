import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  firstName:String="LearnersCode";
  lastName:String="Creators";
  age:number=10;
  logo:string="https://angular.io/assets/images/logos/angular/angular.svg";
  width:number=50;
  height:number=100;
  mytext:string="angular"
  constructor() { }

  sayHello(){
    alert("this is my angular project using stackblitz");
  }
  textChanged(event){
    console.log(event.target.value);
  }
  textChangeFn(){
    if(this.mytext=="angular"){
        this.mytext="learnersCode";
    }else{     
        this.mytext="angular";
    }
    
  }
  ngOnInit() {
  }

}