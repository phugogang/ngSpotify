import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {routing} from './app.routing';
import {SpotifyService} from './shared/spotify.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    AboutComponent,
    ArtistComponent,
    AlbumComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing

  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
