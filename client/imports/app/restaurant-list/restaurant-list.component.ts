import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';

import { Restaurants } from '../../../../imports/collections/restaurants';
import { Restaurant } from '../../../../imports/models/restaurant';

@Component({
  selector: 'restaurant-list',
  templateUrl: 'restaurant-list.html',
  styleUrls: ['restaurant-list.scss']
})
export class RestaurantListComponent implements OnInit, OnDestroy {
  restaurants: Observable<Restaurant[]>;
  restaurantListSubscription: Subscription;
  ngOnInit() {
    this.restaurantListSubscription = MeteorObservable.subscribe('restaurantList').subscribe(() => {
      this.restaurants = Restaurants.find();
    });
  }
  ngOnDestroy() {
    if (this.restaurantListSubscription) {
      this.restaurantListSubscription.unsubscribe();
    }
  }
  removeTodo(_id: string) {
    Meteor.call('removeTodo', _id);
  }
}
