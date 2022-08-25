import { Category } from './types';
import { RestApis } from '@/rest/apis';

const getListEndpoint = () => 'https://run.mocky.io/v3/f25ced0a-9ff7-4996-bdc7-430f281c48db';
const getList = () => RestApis.get<Category[]>(getListEndpoint());

export const CategoryApis = { getList };

export const CategoryApiEndpoints = { getList: getListEndpoint };
