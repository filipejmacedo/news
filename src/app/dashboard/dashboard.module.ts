import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
