import { badgeConfig } from '../badge';

export const buttonsConfig = () => {
  console.log(123);
  return {
    primary: {
      color: 'var(--site-btn-text)',
      hoverColor: 'var(--site-btn-text)',
      activeColor: 'var(--site-btn-text)',
    },

    secondary: {
      color: 'var(--site-btn-text)',
      hoverColor: 'var(--site-btn-text)',
      activeColor: 'var(--site-btn-text)',

      background: 'var(--secondary-500)',
      hoverBackground: 'var(--secondary-600)',
      activeBackground: 'var(--secondary-700)',

      borderColor: 'transparent',
      hoverBorderColor: 'transparent',
      activeBorderColor: 'transparent',
    },

    text: {
      primary: {
        color: 'var(--primary-text-button-color)',
      },

      secondary: {
        color: 'var(--secondary-text-button-color)',
        hoverBackground: 'color-mix(in srgb,var(--secondary-400),transparent 96%)',
        activeBackground: 'color-mix(in srgb,var(--secondary-400),transparent 84%)',
      },
    },

    outlined: {
      primary: {
        color: 'var(--primary-text-button-color)',
        borderColor: 'var(--primary-400)',
      },

      secondary: {
        color: 'var(--secondary-text-button-color)',
        borderColor: 'var(--secondary-400)',
        hoverBackground: 'color-mix(in srgb,var(--secondary-400),transparent 96%)',
        activeBackground: 'color-mix(in srgb,var(--secondary-400),transparent 84%)',
      },
    },

    raised: {
      shadow: 'var(--button-shadow)',
    },

    badge: badgeConfig(),
  };
};

export const buttonPt = () => {
  return {
    root: {
      class: 'font-16-n',
    },
  };
};
