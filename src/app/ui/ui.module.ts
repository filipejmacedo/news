import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { NewsRoutingRoutes } from '../news/news-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingRoutes
  ],
  declarations: [UiComponent, LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
