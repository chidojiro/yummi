import './FoodCards.css';
import { ClassName } from '@/common/types';
import clsx from 'clsx';
import React from 'react';
import { FoodCard } from '../FoodCard/FoodCard';
import { useFoods } from '../useFoods';

export type FoodCardsProps = ClassName;

export const FoodCards = ({ className }: FoodCardsProps) => {
  const { foods = [] } = useFoods();

  return (
    <div className={clsx('food-cards', className)}>
      {foods.map(food => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
};
