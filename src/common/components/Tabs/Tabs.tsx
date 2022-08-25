import './Tabs.css';
import clsx from 'clsx';
import React from 'react';
import {
  Tab as HeadlessTab,
  TabContent as HeadlessTabContent,
  Tabs as HeadlessTabs,
  TabsProps as HeadlessTabsProps,
} from '../../headless';
import { ClassName } from '../../types';
import { Button } from '../Button';

export type Tab = {
  value?: string;
  label: React.ReactNode;
  content?: React.ReactNode;
};

export type TabsProps = HeadlessTabsProps &
  ClassName & {
    items: Tab[];
  };

export const Tabs = ({ value, onChange, items, className, ...restProps }: TabsProps) => {
  return (
    <HeadlessTabs value={value} onChange={onChange}>
      <div className={clsx('tabs', className)} {...restProps}>
        <nav className='tabs__navigator' aria-label='Tabs'>
          {items.map((tab, idx) => (
            <HeadlessTab key={idx} content={tab.content} value={tab.value}>
              {({ isActive, onClick }) => (
                <Button
                  onClick={onClick}
                  className={clsx('tabs__navigator-item', isActive && 'tabs__navigator-item--active')}
                  aria-current={isActive ? 'page' : undefined}
                  rounded='none'
                  variant={isActive ? 'solid' : 'outline'}>
                  {tab.label}
                </Button>
              )}
            </HeadlessTab>
          ))}
        </nav>
        <div className='tabs__content'>
          <HeadlessTabContent />
        </div>
      </div>
    </HeadlessTabs>
  );
};
