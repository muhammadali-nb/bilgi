export const inputTextPt = () => {
  return {
    root: {
      class: 'font-16-n',
    },
  };
};

export const inputTextConfig = () => {
  console.log('inputTextConfig');
  return {
    colorScheme: {
      light: {
        shadow: 'var(--input-field-shadow)',
        // borderColor: 'transparent',
      },
      dark: {
        shadow: 'none',
      },
    },
    paddingX: '3rem',
    paddingY: '1.4rem',
  };
};
