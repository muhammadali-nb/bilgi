import { useAdminHeader } from '@store/admin-header';

export default defineNuxtRouteMiddleware((to) => {
  const adminHeaderStore = useAdminHeader();
  if (typeof to.name !== 'string' || to.name.includes('/admin')) return;
  adminHeaderStore.name = to.name.split('__')[0];
  if (to.name.includes('bid-id')) {
    adminHeaderStore.activeBackButton();
  }
  else {
    adminHeaderStore.inactiveBackButton();
    adminHeaderStore.setBidNumber();
  }
});
