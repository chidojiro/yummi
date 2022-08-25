import './Button.css';
import clsx from 'clsx';

type Variant = 'outline' | 'solid';
type ColorScheme = 'primary';

export type ButtonProps = JSX.IntrinsicElements['button'] & {
  variant?: Variant;
  colorScheme?: ColorScheme;
  rounded?: 'md' | 'none';
};

export const Button = ({
  variant = 'solid',
  colorScheme = 'primary',
  rounded = 'md',
  className,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      {...restProps}
      className={clsx('button', `button-${variant}-${colorScheme}`, `button-rounded-${rounded}`, className)}
    />
  );
};
