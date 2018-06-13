import { Component, OnInit, Input } from '@angular/core';
import { Metro } from '../../model/metro.model';


@Component({
  selector: 'ca-dettaglio',
  templateUrl: './dettagliotreno.component.html',
  styleUrls: ['./dettagliotreno.component.css']
})
export class DettagliotrenoComponent implements OnInit {
  @Input() treno: Metro;

  constructor() { }

  ngOnInit() {
  }

}
