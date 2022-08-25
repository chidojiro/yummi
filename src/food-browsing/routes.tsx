import { RouteItem } from '@/routing/types';
import React from 'react';

const FoodBrowsingPage = React.lazy(() =>
  import('./FoodBrowsingPage').then(({ FoodBrowsingPage }) => ({
    default: FoodBrowsingPage,
  }))
);

export const FoodBrowsingRoutes: Record<'FoodBrowsing', RouteItem> = {
  FoodBrowsing: {
    path: '/',
    component: FoodBrowsingPage,
  },
};
