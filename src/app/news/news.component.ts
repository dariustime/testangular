import { Component, OnInit } from '@angular/core';
import { News } from './../model/news.model';

@Component({
  selector: 'ca-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  //Array di oggetti News
  notizie: News[] = [];
  constructor() {
    this.notizie.push({id:1, titolo:'Titolo Notizia 1', descrizione: 'Descrizione notizia 1'});
    this.notizie.push({id:2, titolo:'Titolo Notizia 2', descrizione: 'Descrizione notizia 2'});
    this.notizie.push({id:3, titolo:'Titolo Notizia 3', descrizione: 'Descrizione notizia 3'});
  }

  //definizione gestore evento
  dettaglio(id){
    alert("ID notizia: "+ id);
  }

  ngOnInit() {
  }

}
