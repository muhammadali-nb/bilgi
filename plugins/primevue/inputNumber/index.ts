export const inputNumberPt = () => {
  return {
    pcInputText: {
      root: {
        readonly: true,
        class: 'font-16-n',
      },
    },
  };
};

export const inputNumberConfig = () => {
  return {
    button: {
      width: '3.5rem',
    },
    colorScheme: {
      light: {
        button: {
          background: '{button.primary.background}',
          hoverBackground: '{button.primary.hover.background}',
          activeBackground: '{button.primary.active.background}',

          borderColor: '{button.primary.border.color}',
          hoverBorderColor: '{button.primary.hover.border.color}',
          activeBorderColor: '{button.primary.active.border.color}',

          color: '{button.primary.color}',
          hoverColor: '{button.primary.hover.color}',
          activeColor: '{button.primary.active.color}',
        },
      },

      dark: {
        button: {
          background: '{button.primary.background}',
          hoverBackground: '{button.primary.hover.background}',
          activeBackground: '{button.primary.active.background}',

          borderColor: '{button.primary.border.color}',
          hoverBorderColor: '{button.primary.hover.border.color}',
          activeBorderColor: '{button.primary.active.border.color}',

          color: '{button.primary.color}',
          hoverColor: '{button.primary.hover.color}',
          activeColor: '{button.primary.active.color}',
        },
      },
    },
  };
};
