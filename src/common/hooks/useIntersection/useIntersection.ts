import { useDisclosure } from '@/common/hooks';
import React from 'react';
import { HTMLElementOrHTMLElementRef } from '@/common/types';
import { AssertUtils } from '@/common/utils';

export const useIntersection = (
  elementOrElementRef?: HTMLElementOrHTMLElementRef | null,
  rootMargin?: string
): boolean => {
  const element = AssertUtils.isRef<HTMLElement>(elementOrElementRef)
    ? elementOrElementRef.current
    : elementOrElementRef;

  const intersectedDisclosure = useDisclosure();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        intersectedDisclosure.set(entry.isIntersecting);
      },
      { rootMargin }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [element, intersectedDisclosure, rootMargin]);

  return intersectedDisclosure.isOpen;
};
