import { AppSpinner } from './spinner';

//
//

export const AppLoadingScreen = () => {
  return (
    <div className="flex items-center justify-center w-full text-neutral-500 absolute top-0 left-0 h-screen bg-gradient-to-b from-emerald-50 to-white">
      <AppSpinner />
    </div>
  );
};
