import { Tab, Tabs } from '@/common/components';
import { TabsProps } from '@/common/headless';
import { ClassName } from '@/common/types';
import { useCategories } from '../useCategories';

export type CategoryTabsProps = ClassName & Pick<TabsProps, 'value' | 'onChange'>;

export const CategoryTabs = ({ className, value, onChange }: CategoryTabsProps) => {
  const { categories = [], isValidatingCategories } = useCategories();

  const TabItems: Tab[] = [
    { label: 'All', value: '' },
    ...categories.map(({ name, id }) => ({ label: name, value: id })),
  ];

  if (isValidatingCategories) return null;

  return <Tabs value={value} onChange={onChange} className={className} items={TabItems} data-testid='category-tabs' />;
};
