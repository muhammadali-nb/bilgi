export const paginatorConfig = () => {
  return {
    background: 'transparent',
    padding: '10px',
    navButtonSelectedBackground: '{primary.500}',
    navButtonSelectedColor: 'var(--white)',
    root: {
      padding: '0',
    },

  };
};

export const paginatorPt = () => {
  return {
    prev: {
      innerHTML: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3 7.8L9.58915 10.3172C9.16308 10.7128 9.16308 11.3872 9.58915 11.7828L12.3 14.3M11 0.999998C5.47715 0.999997 0.999999 5.47715 0.999998 11C0.999997 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 0.999999 11 0.999998Z" stroke="#80858B" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                `,
    },
    next: {
      innerHTML: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.70001 14.2L12.4108 11.6828C12.8369 11.2872 12.8369 10.6128 12.4108 10.2172L9.70001 7.7M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 0.999999 11 0.999999C5.47715 0.999999 0.999999 5.47715 0.999999 11C0.999999 16.5228 5.47715 21 11 21Z" stroke="#80858B" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                  `,
    },
  };
};
