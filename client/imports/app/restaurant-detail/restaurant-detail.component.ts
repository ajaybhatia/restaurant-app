import { Component, OnInit, OnDestroy } from '@angular/core';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { Restaurants } from './../../../../imports/collections/restaurants';

import { Restaurant } from './../../../../imports/models/restaurant';

@Component({
  selector: 'restaurant-detail',
  templateUrl: 'restaurant-detail.html'
})
export class RestaurantDetailComponent implements OnInit, OnDestroy {
  id: string;
  restaurant: Restaurant;
  restaurantListSubscription: Subscription;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.restaurantListSubscription = MeteorObservable.subscribe('restaurantList').subscribe(() => {
      this.route.params.subscribe(params => {
        this.id = params['id'];
        this.restaurant = Restaurants.findOne(this.id);
      });
    });
  }
  ngOnDestroy() {
    if (this.restaurantListSubscription) {
      this.restaurantListSubscription.unsubscribe();
    }
  }
}
