import React from 'react';
import { useFetcher } from '@/common/hooks';
import { CategoryApis } from './apis';

export const useCategories = () => {
  const {
    data: categories,
    isInitializing,
    isValidating,
    mutate,
  } = useFetcher(['useCategories'], () => CategoryApis.getList());

  return React.useMemo(
    () => ({
      categories,
      isInitializingCategories: isInitializing,
      isValidatingCategories: isValidating,
      mutateCategories: mutate,
    }),
    [categories, isInitializing, isValidating, mutate]
  );
};
