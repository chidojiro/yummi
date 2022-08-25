import { Option } from '@/common/types';
import clsx from 'clsx';
import './Select.css';

export type SelectProps = JSX.IntrinsicElements['select'] & {
  options: Option[];
};

export const Select = ({ className, options, ...restProps }: SelectProps) => {
  return (
    <select className={clsx('select', className)} {...restProps}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
