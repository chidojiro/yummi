import './FoodCards.css';
import { ClassName } from '@/common/types';
import clsx from 'clsx';
import React from 'react';
import { FoodCard } from '../FoodCard/FoodCard';

import { Food } from '../types';

export type FoodCardsProps = ClassName & {
  foods: Food[];
};

export const FoodCards = ({ className, foods }: FoodCardsProps) => {
  return (
    <div className={clsx('food-cards', className)} data-testid='food-cards'>
      {foods.length ? foods.map(food => <FoodCard key={food.id} food={food} />) : 'No results found'}
    </div>
  );
};
