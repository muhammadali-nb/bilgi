export const toggleButtonConfig = () => {
  return {
    padding: '.4rem',
    contentPadding: '.9rem',
    colorScheme: {
      light: {
        color: 'var(--text-color)',
        background: 'var(--element-light)',
        checked: {
          background: 'var(--element-light)',
        },
      },
      dark: {
        color: 'var(--text-color)',
      },
    },
  };
};

export const toggleButtonPt = () => {
  return {
    label: {
      class: 'font-16-r',
    },
  };
};
