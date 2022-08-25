import './FoodBrowsingPage.css';
import { CategoryTabs } from '@/category/CategoryTabs';
import { SearchInput } from '@/common/components';
import { MainLayout } from '@/layout/MainLayout';

export const FoodBrowsingPage = () => {
  return (
    <MainLayout>
      <SearchInput />
      <CategoryTabs className='food-browsing__category' />
    </MainLayout>
  );
};
