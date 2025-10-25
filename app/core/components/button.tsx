import type { ReactNode } from 'react';
import { cn } from '../helpers/cn';
import type { ClassValue } from 'clsx';
import { NavLink } from 'react-router';

//
//

interface AppButtonProps {
  className?: ClassValue;
  variant?: 'default' | 'primary';
  children: ReactNode;
  to?: string;
  onClick?: () => void;
}

export const AppButton = (params: AppButtonProps) => {
  const variants = {
    default: 'bg-white flex items-center justify-center hover:border-black',
    primary: 'bg-black text-white flex items-center justify-center hover:border-white',
  };

  const activeVariant = variants[params.variant || 'default'];

  const baseClass =
    'min-w-36 min-h-10 border border-neutral-200 rounded-lg active:scale-95 cursor-pointer transition-all transform ease-in-out';

  if (params.to) {
    return (
      <NavLink
        to={params.to}
        className={cn(baseClass, activeVariant, params.className)}
        viewTransition
      >
        {params.children}
      </NavLink>
    );
  }

  return (
    <button className={cn(baseClass, activeVariant, params.className)} onClick={params?.onClick}>
      {params.children}
    </button>
  );
};
