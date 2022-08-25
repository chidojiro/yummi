import { SearchInput } from '@/common/components';
import { MainLayout } from '@/layout/MainLayout';

export type FoodBrowsingPageProps = {
  //
};

export const FoodBrowsingPage = ({}: FoodBrowsingPageProps) => {
  return (
    <MainLayout>
      <SearchInput />
    </MainLayout>
  );
};
