import './Input.css';

import clsx from 'clsx';

export type InputProps = JSX.IntrinsicElements['input'];

export const Input = ({ className, ...restProps }: InputProps) => {
  return <input className={clsx('input', className)} {...restProps} />;
};
