import { Tabs } from '@/common/components';
import { Tab } from '@/common/components';
import { ClassName } from '@/common/types';
import { useCategories } from '../useCategories';

export type CategoryTabsProps = ClassName;

export const CategoryTabs = ({ className }: CategoryTabsProps) => {
  const { categories = [], isValidatingCategories } = useCategories();

  const TabItems: Tab[] = [
    { label: 'All', value: 'All' },
    ...categories.map(({ name }) => ({ label: name, value: name })),
  ];

  if (isValidatingCategories) return null;

  return <Tabs className={className} items={TabItems} />;
};
