export const inputTextPt = () => {
  return {
    root: {
      class: 'font-18-n',
    },
  };
};

export const inputTextConfig = () => {
  return {
    colorScheme: {
      light: {
        shadow: 'var(--input-field-shadow)',
        borderColor: 'transparent',
      },
      dark: {
        shadow: 'none',
      },
    },
    paddingX: '1.8rem',
  };
};
