import { createContext, useEffect, useState, useContext } from 'react';

interface AuthContextContext {
  currentUser: {
    id: number;
    name: string;
    profilePic: string;
  } | null;
  login: () => void;
}

export const AuthContext = createContext({} as AuthContextContext);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export function useAuthContext() {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const user = localStorage.getItem('user');
  const parsedUser = user ? JSON.parse(user) : null;
  const [currentUser, setCurrentUser] = useState<
    AuthContextContext['currentUser']
  >(parsedUser || null);

  const login = () => {
    setCurrentUser({
      id: 1,
      name: 'John Doe',
      profilePic:
        'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600',
    });
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
