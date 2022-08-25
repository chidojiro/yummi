import './Tag.css';
import { Children, ClassName } from '@/common/types';
import clsx from 'clsx';

export type TagProps = ClassName & Children;

export const Tag = ({ className, children }: TagProps) => {
  return <div className={clsx('tag', className)}>{children}</div>;
};
