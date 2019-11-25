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
  constructor() { }

  ngOnInit() {
  }

}