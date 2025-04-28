export const AUTH_TOKEN_NAME = 'access_token';
export const CLIENT_ID_NAME = 'Client_id';
export const TOKEN_CREATED = 'Token_created';
export const ROLES = 'roles';
export const BRANCH_ID = 'branch_id';
export const UID = 'uid';

export const useAuthService = () => {
  const getToken = (): string | null => localStorage.getItem(AUTH_TOKEN_NAME);

  const getUID = (): string | null => localStorage.getItem(UID);
  const setUID = (id: string) => localStorage.setItem(UID, id);

  // const getRoles = (): Roles[] | undefined => localStorage.getItem(ROLES)?.split(',').map(i => i as Roles);

  const setToken = (token: string): void => localStorage.setItem(AUTH_TOKEN_NAME, token);

  const setRoles = (roles: string): void => localStorage.setItem(ROLES, roles);

  const removeRoles = () => localStorage.removeItem(ROLES);

  const removeToken = () => localStorage.removeItem(AUTH_TOKEN_NAME);

  const getClientId = (): string | null => localStorage.getItem(CLIENT_ID_NAME);

  const setClientId = (client_id: string): void => localStorage.setItem(CLIENT_ID_NAME, client_id);

  const removeClientId = () => localStorage.removeItem(CLIENT_ID_NAME);

  const getTokenTime = (): string | null => localStorage.getItem(TOKEN_CREATED);

  const setTokenTime = (time: string): void => localStorage.setItem(TOKEN_CREATED, time);

  const removeTokenTime = (): void => localStorage.removeItem(TOKEN_CREATED);

  return {
    getToken,
    setToken,
    removeToken,
    getClientId,
    setClientId,
    removeClientId,
    getTokenTime,
    setTokenTime,
    removeTokenTime,
    // getRoles,
    setRoles,
    removeRoles,

    getUID,
    setUID,
  };
};
