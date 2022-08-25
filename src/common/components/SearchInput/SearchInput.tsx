import './SearchInput.css';

import clsx from 'clsx';
import { Input, InputProps } from '../Input';
import { SearchIcon } from '@/common/icons';

export type SearchInputProps = InputProps;

export const SearchInput = ({ className, ...restProps }: SearchInputProps) => {
  return (
    <div className={clsx('search-input__container', className)}>
      <SearchIcon className='search-input__search-icon' />
      <Input className={clsx('search-input')} {...restProps} />
    </div>
  );
};
