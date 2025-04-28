export const getYearFromMonthLength = (value: number): { value: number, type: 'years' | 'months' } => {
  if (!Number.isInteger(value / 12)) return { value, type: 'months' };
  return {
    value: value / 12,
    type: 'years',
  };
};
