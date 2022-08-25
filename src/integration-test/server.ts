import { CategoryMockHandlers } from '@/category/mockHandlers';
import { FoodMockHandlers } from '@/food/mockHandlers';
import { DefaultBodyType, MockedRequest, RestHandler } from 'msw';
import { setupServer } from 'msw/node';

const getHandlers = (handlers: Record<string, () => RestHandler<MockedRequest<DefaultBodyType>>>) =>
  Object.values(handlers).map(getHandler => getHandler());

const handlers = [FoodMockHandlers, CategoryMockHandlers].map(getHandlers).flat();

export const server = setupServer(...handlers);
