import { CategorySelect } from '@/category/CategorySelect';
import { CategoryTabs } from '@/category/CategoryTabs';
import { Button, SearchInput } from '@/common/components';
import { useBreakpoint } from '@/common/hooks';
import { FoodCards } from '@/food/FoodCards';
import { useFoods } from '@/food/useFoods';
import { MainLayout } from '@/layout/MainLayout';
import React from 'react';
import './FoodBrowsingPage.css';

export const FoodBrowsingPage = () => {
  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [categoryId, setCategoryId] = React.useState('');
  const itemsPerPage = useBreakpoint({ '1024': 9, '768': 10 }) ?? 10;

  const { foods = [] } = useFoods();

  const filteredFoods = foods
    .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
    .filter(food => {
      if (!categoryId) return true;

      return food.categoryId === categoryId;
    });

  const paginatedFoods = filteredFoods.slice(0, itemsPerPage * page);

  const handleShowMoreClick = () => {
    setPage(prev => prev + 1);
  };

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleCategoryChange = (value: string | number) => {
    setCategoryId(value.toString());
    setPage(1);
  };

  const hasMore = paginatedFoods.length < filteredFoods.length;

  return (
    <MainLayout>
      <SearchInput value={search} onChange={handleSearchChange} placeholder='Enter food name...' />
      <div className='food-browsing__category'>
        <div className='food-browsing__category--select'>
          <label>Category: </label>
          <CategorySelect value={categoryId} onChange={e => handleCategoryChange(e.target.value)} />
        </div>
        <CategoryTabs value={categoryId} onChange={handleCategoryChange} className='food-browsing__category--tabs' />
      </div>
      <FoodCards foods={paginatedFoods} />
      {hasMore && (
        <Button variant='outline' className='food-browsing__show-more' onClick={handleShowMoreClick}>
          +Show more
        </Button>
      )}
    </MainLayout>
  );
};
