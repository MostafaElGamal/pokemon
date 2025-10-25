import type { ReactNode } from 'react';
import type { ClassNameValue } from 'tailwind-merge';
import { cn } from '../helpers/cn';

//
//

interface AppChipProps {
  label: ReactNode;
  className?: ClassNameValue;
  variant?: 'default' | 'danger';
}

export const AppChip = ({ variant = 'default', className, label }: AppChipProps) => {
  const baseClass = 'capitalize p-1 px-3 rounded-full text-xs font-semibold min-w-10 text-center';
  const variants = {
    default: 'bg-neutral-200 border border-neutral-300',
    danger: 'bg-rose-600 border border-rose-700 text-white',
  };

  if (!label) return;

  return <div className={cn(baseClass, variants[variant], className)}>{label}</div>;
};
