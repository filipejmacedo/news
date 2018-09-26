import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { ViewComponent, SafePipe } from './view/view.component';
import { ListComponent } from './list/list.component';
import { FavoriteComponent } from '../core/favorite/favorite.component';

import { NewsRoutingRoutes } from './news-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingRoutes
  ],
  declarations: [NewsComponent, ViewComponent, ListComponent, FavoriteComponent, SafePipe]
})
export class NewsModule { }
