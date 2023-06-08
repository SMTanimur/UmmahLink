
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ICurrentUser } from '../types/user.type';
import { getCurrentUserLocalStorage, setCurrentUserLocalStorage } from '../lib/localStorage';

interface IUserPersistState {
  currentUser: ICurrentUser | null;
  setCurrentUser: (currentUser: ICurrentUser | null) => void;
}

export const useUserPersistStore = create(
  persist<IUserPersistState>(
    (set, get) => ({
      currentUser: getCurrentUserLocalStorage(),
      setCurrentUser: (currentUser: ICurrentUser | null) => {
          setCurrentUserLocalStorage(currentUser);
          set({ currentUser });
      }
    }),
    { name: 'user' }
  )
);