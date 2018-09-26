import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core/services/core.service';

import { News } from '../core/model/news';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listFavs: News[];

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.listFavs = this.coreService.getMyFavs();
  }

  remove(fav) {
    this.coreService.saveFav(fav);
    this.ngOnInit();
  }

}
