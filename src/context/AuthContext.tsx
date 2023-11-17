import { createContext, ReactNode, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

interface AuthContextType {
  user: User | null;
}

// Create the context with an initial value
export const AuthContext = createContext<AuthContextType>({
  user: null,
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const auth = getAuth();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    let unsubscribe: () => void;

    // Set up the auth state observer
    // eslint-disable-next-line prefer-const
    unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Clean up the observer when the component unmounts
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [auth]);

  const authContextValue: AuthContextType = {
    user,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
