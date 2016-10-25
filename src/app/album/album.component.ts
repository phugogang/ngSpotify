import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';

import {SpotifyService} from '../shared/spotify.service';

@Component({
  selector: 'rb-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private albumId: string;
  private album: Array<any>;

  constructor(private _spotifyService: SpotifyService, private _router: ActivatedRoute) { }



  ngOnInit() {
    this.subscription = this._router.params.subscribe(
      (param: any) => {
        this.albumId = param['id']
      }
    );
    this._spotifyService.getAlbum(this.albumId)
      .subscribe(
        album => this.album = album
      )


  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
