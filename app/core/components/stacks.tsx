import type { ReactNode } from 'react';
import { cn } from '../helpers/cn';
import type { ClassValue } from 'clsx';

//
//

interface AppStackProps {
  className?: ClassValue;
  children: ReactNode;
}

export const AppStackRow = ({ className, children }: AppStackProps) => {
  return <div className={cn('flex items-center gap-2', className)}>{children}</div>;
};

export const AppStackColumn = ({ className, children }: AppStackProps) => {
  return <div className={cn('flex flex-col gap-2', className)}>{children}</div>;
};
