import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ca-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  link_menu_1:string;
  link_menu_2:string;
  link_menu_3:string;

  constructor() {
    this.link_menu_1="Treni";
    this.link_menu_2="Chi Siamo";
    this.link_menu_3="Contattaci";    
  }

  ngOnInit() {
  }

}
