import './FoodBrowsingPage.css';
import { CategoryTabs } from '@/category/CategoryTabs';
import { SearchInput } from '@/common/components';
import { MainLayout } from '@/layout/MainLayout';
import { FoodCards } from '@/food/FoodCards';
import React from 'react';
import { useFoods } from '@/food/useFoods';
import { Button } from '@/common/components';

export const FoodBrowsingPage = () => {
  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [categoryId, setCategoryId] = React.useState('');

  const { foods = [] } = useFoods();

  const filteredFoods = foods
    .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
    .filter(food => {
      if (!categoryId) return true;

      return food.categoryId === categoryId;
    });

  const paginatedFoods = filteredFoods.slice(0, 9 * page);

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
      <CategoryTabs value={categoryId} onChange={handleCategoryChange} className='food-browsing__category' />
      <FoodCards foods={paginatedFoods} />
      {hasMore && (
        <Button variant='outline' className='food-browsing__show-more' onClick={handleShowMoreClick}>
          +Show more
        </Button>
      )}
    </MainLayout>
  );
};
