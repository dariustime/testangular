import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TreniComponent } from './treni/treni.component';
import { MmssPipe } from './mmss.pipe';
import { NewsComponent } from './news/news.component';
import { TastieraComponent } from './tastiera/tastiera.component';
import { MetroComponent } from './metro/metro.component';
import { DettagliotrenoComponent } from './treni/dettagliotreno/dettagliotreno.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TreniComponent,
    MmssPipe,
    NewsComponent,
    TastieraComponent,
    MetroComponent,
    DettagliotrenoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
