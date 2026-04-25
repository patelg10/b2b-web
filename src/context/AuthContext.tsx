import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  token?: string;
}

interface AuthContextType {
  user: User | null;
  login: (userData: any) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser && savedUser !== "undefined") {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("Failed to parse user data", e);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const loginAction = (userData: any) => {
    console.log("Login data received:", userData);
    
    // Extract user and token based on the provided structure
    const userInfo = userData?.data;
    const token = userData?.meta?.token || userData?.token;
    
    if (userInfo && typeof userInfo === 'object') {
      const userToSave = { ...userInfo };
      if (token) userToSave.token = token;
      
      setUser(userToSave);
      localStorage.setItem("user", JSON.stringify(userToSave));
      console.log("User state updated:", userToSave);
    } else {
      // Fallback for different structures if they exist
      const fallbackUser = userData?.user || userData;
      if (fallbackUser && fallbackUser.email) {
          const userToSave = { ...fallbackUser };
          if (token) userToSave.token = token;
          setUser(userToSave);
          localStorage.setItem("user", JSON.stringify(userToSave));
      } else {
          console.error("Invalid login data structure:", userData);
      }
    }
  };

  const logoutAction = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login: loginAction, logout: logoutAction, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
