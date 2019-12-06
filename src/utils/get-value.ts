import { math } from 'polished';
import { variables } from 'styles/variables';

export const getValue = (nbr: string | number, fallback: number) => {
  let value: string;
  if (typeof nbr === 'string') {
    const hasDivider = nbr.includes('/');
    if (hasDivider) {
      const [val, base] = nbr.split('/');
      value = math(`(${Number(val)} / ${Number(base)}) * 100`);
    } else {
      // tslint:disable-next-line
      console.warn('You must provide a number or divider string');
      value = math(`(${fallback} / ${variables.gridColumnCount}) * 100`);
    }
  } else {
    value = math(`(${nbr || fallback} / ${variables.gridColumnCount}) * 100`);
  }
  return `${value}%`;
};
