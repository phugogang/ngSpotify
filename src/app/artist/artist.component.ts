import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {SpotifyService} from '../shared/spotify.service';

import {Subscription} from 'rxjs/Rx';

import {Album} from '../shared/Album';

@Component({
  selector: 'rb-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private id: string;
  private artist: any;
  private albums: Array<any>;

  constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this._route.params.subscribe(
      (param: any) => {
        this.id = param['id'];
        this._spotifyService.getArtist(this.id)
          .subscribe(
             artist => this.artist = artist
          )

        this._spotifyService.getAlbums(this.id)
          .subscribe(
            albums => this.albums = albums.items
          )
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
