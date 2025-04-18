import type { INavigationItem } from '../types';
import { document2Icon, usersIcon } from '@assets/icons';

export const adminNavigation: INavigationItem[] = [
  {
    name: 'admin.bid',
    path: '/admin/bid',
    icon: document2Icon,
  },

  {
    name: 'admin.clients',
    path: '/admin/clients',
    icon: usersIcon,
  },
];
