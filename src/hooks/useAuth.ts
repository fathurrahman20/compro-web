import { useAuth } from "@/context/auth-context";
import APIClient, { type ErrorResponse } from "@/service/api-client";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { setAccessToken, setRefreshToken } from "@/lib/token";

interface LoginRequest {
  email: string;
  password: string;
}

export function useLogin() {
  const loginClient = new APIClient("/auth/login");
  const { setUser, setIsLoadingUser, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (request: LoginRequest) => {
      return await loginClient.post(request, {
        headers: { "Content-Type": "application/json" },
      });
    },
    onSuccess: (data) => {
      setAccessToken(data.data.accessToken);
      setRefreshToken(data.data.refreshToken);

      setUser(data.data);
      setIsAuthenticated(true);
      setIsLoadingUser(false);

      toast.success("Successfully logged in");
      navigate("/dashboard");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(error.response?.data.message || "Login failed");
    },
  });
}
