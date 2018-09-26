import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CoreService } from '../services/core.service';

import { News } from '../model/news';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input ('fav') fav: News;
  @Input('flagFav') flagFav: News;

  @Output ('isFav') isFav = new EventEmitter();

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.checkFav();
  }

  markFav() {
    this.coreService.saveFav(this.fav);
    this.checkFav();
  }

  checkFav() {
    this.isFav.emit(
      {
      item: this.fav,
      fav: this.coreService.getMyFavs().filter(
        (fav) => fav.item.title === this.fav.title).length > 0 ? true : false
      }
    );
  }

}
