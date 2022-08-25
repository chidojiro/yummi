export type FoodPromotion = 'gift' | '1+1' | 'discount';

export type Food = {
  id: string;
  index: number;
  rating: number;
  promotion?: FoodPromotion;
  isNew: boolean;
  categoryId: string;
  minCookTime: number;
  maxCookTime: number;
  restaurant: string;
  name: string;
  imageUrl: string;
};
