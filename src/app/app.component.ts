import { Stanza } from './model/stanza.model';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  show: boolean = true;
  lucidb: Stanza[];
  constructor(){
    this.lucidb = [{
      stanza: 'Luce Cucine',
      stato: 'OFF',
      luminosità: 5      
    },
    {
      stanza: 'Luce Sala da Pranzo',
      stato: 'ON',
      luminosità: 2 
    },
    {
      stanza: 'Luce Bagno',
      stato: 'OFF',
      luminosità: 8 
    }];
  }
  onOff(stanza){
    if(stanza.stato == 'OFF'){
      stanza.stato = 'ON';
    } else {
      stanza.stato = 'OFF';
    }
  }
}
