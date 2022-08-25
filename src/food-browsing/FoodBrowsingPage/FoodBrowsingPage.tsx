import './FoodBrowsingPage.css';
import { CategoryTabs } from '@/category/CategoryTabs';
import { SearchInput } from '@/common/components';
import { MainLayout } from '@/layout/MainLayout';
import { FoodCards } from '@/food/FoodCards';

export const FoodBrowsingPage = () => {
  return (
    <MainLayout>
      <SearchInput />
      <CategoryTabs className='food-browsing__category' />
      <FoodCards />
    </MainLayout>
  );
};
