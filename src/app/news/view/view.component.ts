import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

import { NewsService } from '../news.service';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
 news;

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.news = params.id;
      console.log(this.news);

      /* this.newsService.getNews(this.news).subscribe(data => {
        console.log(data);
      }); */
    });


  }

}
