export interface IPhoneMaskProps {
  invalid?: boolean
  icon?: boolean
  modelValue: string
};

export interface IPhoneMaskEmit {
  (e: 'update:modelValue', value: string): void
  (e: 'complete'): void
};
