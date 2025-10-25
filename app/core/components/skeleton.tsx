import type { ClassNameValue } from 'tailwind-merge';
import { cn } from '../helpers/cn';

//
//

interface AppSkeletonProps {
  className?: ClassNameValue;
}

export const AppSkeleton = ({ className }: AppSkeletonProps) => {
  return <div className={cn('h-2.5 bg-neutral-300 rounded-lg w-48 animate-pulse', className)} />;
};
