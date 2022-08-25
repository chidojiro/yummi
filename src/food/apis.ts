import { Food } from './types';
import { RestApis } from '@/rest/apis';

const getList = () => RestApis.get<Food[]>('https://run.mocky.io/v3/a24cfec5-f76c-410b-a5ac-9f63fab28abb');

export const FoodApis = { getList };
