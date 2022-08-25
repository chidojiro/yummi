import { NumberUtils } from './../common/utils/number';
import { rest } from 'msw';
import { FoodPromotion } from '@/food/types';
import { defaultMockCategories } from '@/category/mockHandlers';
import { Food } from './types';
import { FoodApiEndpoints } from './apis';

const categoryIds = defaultMockCategories.map(({ id }) => id);
const promotions: (FoodPromotion | undefined)[] = ['1+1', 'discount', 'gift', undefined];

export const defaultMockFoods: Food[] = new Array(20).fill(null).map((_, idx) => ({
  categoryId: categoryIds[Math.floor(Math.random() * categoryIds.length)],
  id: idx.toString(),
  imageUrl: '',
  index: idx,
  isNew: Math.random() > 0.5,
  maxCookTime: 10,
  minCookTime: 5,
  name: `Food ${NumberUtils.pad(idx, 2)}`,
  rating: Math.random() * 5,
  restaurant: '',
  promotion: promotions[Math.floor(Math.random() * promotions.length)],
}));

const getList = () =>
  rest.get(FoodApiEndpoints.getList(), (req, res, ctx) => {
    return res(ctx.json(defaultMockFoods));
  });

export const FoodMockHandlers = { getList };
