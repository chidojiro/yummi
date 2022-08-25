import './FoodCard.css';
import { ClassName } from '@/common/types';
import clsx from 'clsx';
import React from 'react';
import { Food } from '../types';
import { Tag } from '@/common/components';
import { StarIcon } from '@/common/icons';
import { FoodPromotion } from './FoodPromotion';

export type FoodCardProps = ClassName & {
  food: Food;
};

export const FoodCard = React.memo(
  ({ className, food: { imageUrl, rating, maxCookTime, minCookTime, name, isNew, promotion } }: FoodCardProps) => {
    return (
      <div className={clsx('food-card', className)}>
        {!!promotion && <FoodPromotion promotion={promotion} />}
        <img className='food-card__image' src={imageUrl} alt='' />
        <div className='food-information'>
          <h5>{name}</h5>
          <div className='food-information__tags'>
            <Tag className='food-information__rating'>
              <StarIcon />
              {rating.toFixed(1)}
            </Tag>
            <Tag>
              {minCookTime}-{maxCookTime} min
            </Tag>
            {isNew && <Tag className='food-information__new'>New</Tag>}
          </div>
        </div>
      </div>
    );
  }
);
FoodCard.displayName = 'FoodCard';
