import {User} from '../shared/models/user/user.interface.ts';

export const UsersLocalStorageKey = 'users';


export function getDataFromStorage<T>(key: string | undefined): T | undefined {
  if (key === undefined) return undefined;

  try {
    const jsonState = localStorage.getItem(key);
    if (!jsonState) {
      return undefined;
    }
    return JSON.parse(jsonState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export function setDataToStorage<T>(state: T, key: string) {
  const stringState = JSON.stringify(state);
  localStorage.setItem(key, stringState);
}

export function deleteDataFromStorage(key: string | undefined) {
  if (!key) {
    return;
  }

  localStorage.removeItem(key);
}

export function removeUserFromStorage(key: string | undefined) {
  if (!key) {
    return;
  }

  const users = getDataFromStorage(UsersLocalStorageKey) as User[];
  const filteredUsers = users.filter((u) => u.name !== key);
  setDataToStorage(filteredUsers, UsersLocalStorageKey);
}
