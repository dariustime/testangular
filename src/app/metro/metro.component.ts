import { Metro } from './../model/metro.model';
import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'ca-metro',
  templateUrl: './metro.component.html',
  styleUrls: ['./metro.component.css']
})
export class MetroComponent implements OnInit {
  //marchio la proprietà datiIn, come d'ingresso
  @Input() datiIn: Metro;
  @Input() ora: number;

  constructor() { }

  ngOnInit() {
  }

}
