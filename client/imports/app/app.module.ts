import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'restaurantList',
        component: RestaurantListComponent
      },
      {
        path: 'restaurantAdd',
        component: RestaurantAddComponent
      },
      {
        path: 'restaurantDetail/:id',
        component: RestaurantDetailComponent
      },
      // Home Page
      {
        path: '',
        redirectTo: '/restaurantList',
        pathMatch: 'full'
      },
      // 404 Page
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    RestaurantAddComponent,
    RestaurantListComponent,
    RestaurantDetailComponent,
    PageNotFoundComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
