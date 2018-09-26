import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { UiModule } from './ui/ui.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NewsModule } from './news/news.module';

import { NgHttpLoaderModule } from 'ng-http-loader';

import { AppRoutingRoutes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    NgHttpLoaderModule,
    CoreModule,
    UiModule,
    DashboardModule,
    NewsModule,
    AppRoutingRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
