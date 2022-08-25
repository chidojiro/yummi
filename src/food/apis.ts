import { Food } from './types';
import { RestApis } from '@/rest/apis';

const getListEndpoint = () => 'https://run.mocky.io/v3/a24cfec5-f76c-410b-a5ac-9f63fab28abb';
const getList = () => RestApis.get<Food[]>(getListEndpoint());

export const FoodApis = { getList };

export const FoodApiEndpoints = { getList: getListEndpoint };
