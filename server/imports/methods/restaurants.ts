import { Meteor } from 'meteor/meteor';

import { Restaurants } from './../../../imports/collections/restaurants';

Meteor.methods({
  addRestaurant(name: string, description: string) {
    Restaurants.insert({
      name, description
    });
  },
  removeRestaurant(_id: string) {
    Restaurants.remove({
      _id
    })
  }
})
