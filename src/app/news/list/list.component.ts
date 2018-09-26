import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

import { News } from '../../core/model/news';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listNews: News[];

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsService.getNewsList().subscribe((data: News[]) => {
      this.listNews = data;
    });
  }
  markFav(event) {
    const news: News = this.listNews.filter((item) => item.title === event.item.title)[0];
    news['fav'] = event.fav;
  }
}
