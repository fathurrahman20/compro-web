import { getAccessToken, getRefreshToken, setAccessToken } from "@/lib/token";
import APIClient, { axiosInstance } from "@/service/api-client";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type User = {
  id: number;
  name: string;
  email: string;
};
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setUser: (user: User | null) => void;
  isLoadingUser: boolean;
  setIsLoadingUser: (isLoadingUser: boolean) => void;
  clearUser: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  const fetchUser = useCallback(async () => {
    const getCurrentUser = new APIClient<User>("/auth/me");
    const accessToken = getAccessToken();
    if (!accessToken) {
      setIsLoadingUser(false);
      return;
    }

    try {
      const res = await getCurrentUser.getAll({
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      setUser(res.data);
      setIsAuthenticated(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      const refreshToken = getRefreshToken();
      if (!refreshToken) {
        clearUser();
        return;
      }

      try {
        const refreshRes = await axiosInstance.post("/auth/refresh");

        setAccessToken(
          (refreshRes.data.data as { accessToken: string }).accessToken
        );

        await fetchUser();
      } catch {
        clearUser();
      }
    } finally {
      setIsLoadingUser(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const clearUser = () => {
    setUser(null);
    setIsAuthenticated(false);
    setIsLoadingUser(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        isLoadingUser,
        setIsLoadingUser,
        clearUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be user within a AuthProvider");
  }
  return context;
};
