import './MainLayout.css';

import { Children } from '@/common/types';
import { MainLayoutHeader } from './MainLayoutHeader';

type MainLayoutProps = Children;

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='main-layout'>
      <MainLayoutHeader />
      <div className='main-layout-content'>{children}</div>
    </div>
  );
};
