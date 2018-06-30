import { Component } from '@angular/core';

import { Meteor } from 'meteor/meteor';

@Component({
  selector: 'restaurant-add',
  templateUrl: 'restaurant-add.html'
})
export class RestaurantAddComponent {
  name: string;
  description: string;
  addRestaurant() {
    Meteor.call('addRestaurant', this.name, this.description);
    this.name = null;
    this.description = null;
  }
}
