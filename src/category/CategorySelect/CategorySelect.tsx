import { Select, SelectProps } from '@/common/components';
import { ClassName, Option } from '@/common/types';
import { useCategories } from '../useCategories';

export type CategorySelectProps = ClassName & Pick<SelectProps, 'value' | 'onChange'>;

export const CategorySelect = ({ className, value, onChange }: CategorySelectProps) => {
  const { categories = [], isValidatingCategories } = useCategories();

  const options: Option[] = [
    { label: 'All', value: '' },
    ...categories.map(({ name, id }) => ({ label: name, value: id })),
  ];

  if (isValidatingCategories) return null;

  return <Select options={options} value={value} onChange={onChange} className={className} />;
};
