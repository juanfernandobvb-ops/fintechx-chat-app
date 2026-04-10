import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface UserData {
  fullName: string;
  email: string;
}

interface UserContextType {
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
}

const defaultUserData: UserData = {
  fullName: 'Tom Hillson',
  email: 'Tomhill@mail.com',
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData>(() => {
    // Carregar dados do localStorage se existirem
    const saved = localStorage.getItem('fintechx_user_data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultUserData;
      }
    }
    return defaultUserData;
  });

  // Salvar no localStorage sempre que os dados mudarem
  useEffect(() => {
    localStorage.setItem('fintechx_user_data', JSON.stringify(userData));
  }, [userData]);

  const updateUserData = (data: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
