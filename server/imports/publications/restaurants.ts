import { Meteor } from 'meteor/meteor';

import { Restaurants } from '../../../imports/collections/restaurants';

Meteor.publish('restaurantList', function() {
  return Restaurants.find({});
});
