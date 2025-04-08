import type { PrimeVueConfiguration } from 'primevue/config';
import { definePreset } from '@primeuix/styled';
import Aura from '@primevue/themes/aura';

import { badgeConfig } from './badge';
import { buttonPt, buttonsConfig } from './button';
import { cardConfig, cardPt } from './card';
import { checkBoxConfig } from './checkbox';
import { datePickerPt } from './datePicker';
import { dialogConfig, dialogPt } from './dialog';
import { inputGroupConfig, inputGroupPt } from './inputGroup';
import { inputMaskPt } from './inputMask';
import { inputNumberConfig, inputNumberPt } from './inputNumber';
import { inputTextConfig, inputTextPt } from './inputText';
import { messagePt } from './message';
import { tableConfig, tablePt } from './table';
import { textareaPt } from './textarea';
import { toastConfig } from './toast';
import { toggleButtonConfig, toggleButtonPt } from './toggleButton';

const customPreset = definePreset(Aura, {
  primitive: {
    borderRadius: {
      none: '0',
      xs: '.3rem',
      sm: '.5rem',
      md: '.5rem',
      lg: '1rem',
    },
  },

  semantic: {
    primary: {
      50: 'var(--primary-50)',
      100: 'var(--primary-100)',
      200: 'var(--primary-200)',
      300: 'var(--primary-300)',
      400: 'var(--primary-400)',
      500: 'var(--primary-500)',
      600: 'var(--primary-600)',
      700: 'var(--primary-700)',
      800: 'var(--primary-800)',
      900: 'var(--primary-900)',
      950: 'var(--primary-950)',
    },

    red: {
      50: 'rgb(252, 232, 232)',
      100: 'rgb(248, 202, 202)',
      200: 'rgb(243, 173, 173)',
      300: 'rgb(239, 143, 143)',
      400: 'rgb(234, 114, 114)',
      500: 'rgb(230, 84, 84)',
      600: 'rgb(178, 48, 48)',
      700: 'rgb(142, 1, 1)',
      800: 'rgb(109, 0, 0)',
      900: 'rgb(77, 0, 0)',
      950: 'rgb(51, 0, 0)',
    },

    green: {
      50: 'rgba(224, 250, 230, 1)',
      100: 'rgba(187, 242, 201, 1)',
      200: 'rgba(150, 234, 173, 1)',
      300: 'rgba(112, 225, 144, 1)',
      400: 'rgba(73, 217, 116, 1)',
      500: 'rgba(35, 208, 87, 1)',
      600: 'rgba(20, 180, 66, 1)',
      700: 'rgba(15, 157, 58, 1)',
      800: 'rgba(11, 134, 49, 1)',
      900: 'rgba(8, 110, 41, 1)',
      950: 'rgba(5, 87, 32, 1)',
    },

    orange: {
      50: 'rgba(255, 243, 224, 1)',
      100: 'rgba(255, 231, 192, 1)',
      200: 'rgba(252, 211, 153, 1)',
      300: 'rgba(247, 189, 114, 1)',
      400: 'rgba(235, 162, 63, 1)',
      500: 'rgba(195, 137, 10, 1)',
      600: 'rgba(168, 119, 9, 1)',
      700: 'rgba(141, 100, 7, 1)',
      800: 'rgba(114, 82, 6, 1)',
      900: 'rgba(87, 63, 5, 1)',
      950: 'rgba(60, 45, 3, 1)',
    },

    formField: {
      paddingX: '.5rem',
      paddingY: '1rem',
    },
  },

  components: {
    button: {
      colorScheme: {
        light: buttonsConfig(),
        dark: buttonsConfig(),
      },
    },

    badge: {
      colorScheme: {
        light: badgeConfig(),
        dark: badgeConfig(),
      },
    },

    togglebutton: toggleButtonConfig(),

    toast: toastConfig(),

    card: cardConfig(),

    dialog: dialogConfig(),

    inputtext: inputTextConfig(),

    inputnumber: inputNumberConfig(),

    inputgroup: inputGroupConfig(),

    datatable: tableConfig(),

    checkbox: checkBoxConfig(),

    rating: {
      iconSize: '2rem',
    },

    select: {
      dropdownWidth: '3.5rem',
      dropdownColor: 'var(--primary-500)',
    },
  },
});

export const options: PrimeVueConfiguration = {
  ripple: true,

  pt: {
    button: buttonPt(),

    inputtext: inputTextPt(),

    inputnumber: inputNumberPt(),

    inputgroup: inputGroupPt(),

    inputmask: inputMaskPt(),

    togglebutton: toggleButtonPt(),

    dialog: dialogPt(),

    card: cardPt(),

    datepicker: datePickerPt(),

    textarea: textareaPt(),

    datatable: tablePt(),

    message: messagePt(),
  },

  theme: {
    preset: customPreset,
    options: {
      darkModeSelector: '.app-dark',
    },
  },
};
