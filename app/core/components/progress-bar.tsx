import { AppStackColumn, AppStackRow } from './stacks';

//
//

const FULL_PERCENTAGE = 100;

interface AppProgressBarProps {
  label?: string;
  value?: number;
  percentage: number;
}

export const AppProgressBar = ({ label, value, percentage }: AppProgressBarProps) => {
  const modifiedPercentage = percentage <= FULL_PERCENTAGE ? percentage : FULL_PERCENTAGE;

  return (
    <AppStackColumn className="gap-1">
      <AppStackRow className="justify-between">
        {label && <p className="text-sm capitalize">{label}</p>}
        {value && <p className="text-neutral-400 text-sm">{value}</p>}
      </AppStackRow>

      <div className="w-full bg-neutral-200 rounded-full h-2">
        <div
          className="bg-black h-2 rounded-full"
          style={{ width: `${modifiedPercentage}%` }}
        ></div>
      </div>
    </AppStackColumn>
  );
};
