import { LISTAMETRO } from './../dati/metroremoti';
import { Metro } from './../model/metro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ca-treni',
  templateUrl: './treni.component.html',
  styleUrls: ['./treni.component.css']
})
export class TreniComponent implements OnInit {

  listametro : Metro[] = [];
  trenoselezionato: Metro;
  now: number; 

  constructor() {
    this.listametro = [];
    this.now = new Date().getTime();
   }

  ngOnInit() {
    this.listametro = LISTAMETRO;
  }

  setMetro(t){
    this.trenoselezionato = t;
  }

}
