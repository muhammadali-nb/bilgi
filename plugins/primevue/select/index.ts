export const selectConfig = () => {
  return {
    dropdownWidth: '4rem',
    paddingX: '1.8rem',
    paddingY: '1.5rem',
    // clearIcon: {
    //   width: '1rem',
    //   height: '1rem',
    // },
    // light: {
    //   optionColor: 'var(--site-text)',
    //   optionFocusColor: 'var(--site-text)',
    //   optionSelectedColor: 'var(--site-text)',
    //   optionSelectedFocusColor: 'var(--site-text)',

    //   optionSelectedBackground: 'var(--primary-200)',
    //   optionSelectedFocusBackground: 'var(--primary-200)',
    // },

    // dark: {
    //   optionColor: 'var(--site-text)',
    //   optionFocusColor: 'var(--site-text)',
    //   optionSelectedColor: 'var(--site-text)',
    //   optionSelectedFocusColor: 'var(--site-text)',

    //   optionSelectedBackground: 'var(--primary-400)',
    //   optionSelectedFocusBackground: 'var(--primary-400)',
    // },
  };
};

export const selectPt = () => {
  return {
    label: {
      class: 'font-16-n',
    },
    option: {
      class: 'font-14-n',
    },
    dropdownIcon: {
      width: '22',
      height: '22',
      viewBox: '0 0 22 22',
      innerHTML: `
        <path d="M8 10L10.2929 12.2929C10.6834 12.6834 11.3166 12.6834 11.7071 12.2929L14 10M1 16L1 6C1 3.23858 3.23858 1 6 1L16 1C18.7614 1 21 3.23858 21 6V16C21 18.7614 18.7614 21 16 21H6C3.23858 21 1 18.7614 1 16Z" stroke="#7A8A9E" stroke-width="1.5" stroke-linecap="round"/>
    `,
    },
  };
};
