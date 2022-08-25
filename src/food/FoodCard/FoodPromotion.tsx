import './FoodPromotion.css';
import { FoodPromotion as TFoodPromotion } from '../types';
import { ClassName } from '@/common/types';
import React from 'react';
import { GiftIcon } from '@/common/icons';
import clsx from 'clsx';

export type PromotionProps = ClassName & {
  promotion: TFoodPromotion;
};

const promotionContent: Record<TFoodPromotion, React.ReactNode> = {
  '1+1': '1+1',
  discount: '%',
  gift: <GiftIcon />,
};

export const FoodPromotion = ({ promotion, className }: PromotionProps) => {
  return (
    <div className={clsx('food-promotion', `food-promotion--${promotion}`, className)}>
      {promotionContent[promotion]}
    </div>
  );
};
