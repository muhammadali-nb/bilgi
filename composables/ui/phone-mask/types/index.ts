export interface IPhoneMaskProps {
  invalid?: boolean
  icon?: boolean
  modelValue: string
  defaultValue?: string
  placeholder?: string
  name?: string
};

export interface IPhoneMaskEmit {
  (e: 'update:modelValue', value: string): void
  (e: 'complete'): void
};
