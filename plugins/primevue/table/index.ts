export const tableConfig = () => {
  return {
    headerCell: {
      padding: '10px 16px',
    },

    bodyCell: {
      padding: '1.4rem 1.5rem',
    },

    // colorScheme: {
    //   dark: {
    //     headerCellBackground: 'var(--element-surface-dark)',
    //     rowBackground: 'var(--form-element-background)',
    //   },

    //   light: {
    //     headerCellBackground: 'var(--element-surface-light)',
    //     rowBackground: 'var(--primary-50)',
    //   },
    // },
  };
};

export const tablePt = () => {
  return {
    thead: {
      class: 'font-14-n',
    },
    pcPaginator: {
      // root: {
      //   class: 'asdadsasdasdasdasd',
      // },
      pcRowPerPageDropdown: {
        root: {
          class: 'table-paginator-select',
        },

        dropdown: {
          innerHTML: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.8 9.70001L10.3172 12.4109C10.7128 12.8369 11.3872 12.8369 11.7828 12.4109L14.3 9.70001M1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11Z" stroke="#7065F0" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            `,
        },
      },
    },
  };
};
