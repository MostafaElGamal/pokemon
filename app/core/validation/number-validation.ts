import { AppErrorIncorrectId } from '../errors/app-errors';

//
//

export const validateNumber = (val?: string | number): number | null => {
  if (val === undefined || val === null) return null;

  const parsed = typeof val === 'string' ? parseInt(val, 10) : val;

  if (isNaN(parsed) || !isFinite(parsed) || parsed < 1) {
    return null;
  }

  return parsed;
};

export const validateParamsNumber = (val?: string | number): number => {
  const parsed = validateNumber(val);

  if (!parsed) {
    throw new AppErrorIncorrectId();
  }

  return parsed;
};
