import React from 'react';
import { useFetcher } from '@/common/hooks';
import { FoodApis } from './apis';

export const useFoods = () => {
  const { data: foods, isInitializing, isValidating, mutate } = useFetcher(['useFoods'], () => FoodApis.getList());

  return React.useMemo(
    () => ({
      foods,
      isInitializingFoods: isInitializing,
      isValidatingFoods: isValidating,
      mutateFoods: mutate,
    }),
    [foods, isInitializing, isValidating, mutate]
  );
};
