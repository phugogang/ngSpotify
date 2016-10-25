import { Component } from '@angular/core';
import {SpotifyService} from '../shared/spotify.service';
@Component({
  selector: 'rb-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {
  searchStr: string;
  searchRes:Array<any>;
  constructor(private _spotifyService: SpotifyService) { }

  onSearchMusic(){
    this._spotifyService.searchMusic(this.searchStr)
      .subscribe(res => this.searchRes = res.artists.items);
  }


}
