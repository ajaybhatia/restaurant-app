import { MongoObservable } from 'meteor-rxjs';

import { Restaurant } from '../models/restaurant';

export const Restaurants = new MongoObservable.Collection<Restaurant>('restaurants');
