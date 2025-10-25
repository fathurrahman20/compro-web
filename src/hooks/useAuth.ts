import { useAuth } from "@/context/auth-context";
import APIClient, { axiosInstance } from "@/service/api-client";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

interface LoginRequest {
  email: string;
  password: string;
}

export function useLogin() {
  const loginClient = new APIClient("/auth/login");
  const { setUser } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (request: LoginRequest) => {
      return await loginClient.post(request, {
        headers: { "Content-Type": "application/json" },
      });
    },
    onSuccess: (data) => {
      setUser(data.data);
      toast.success("Successfully logged in");
      navigate("/dashboard");
    },
  });
}

export function useLogout() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async () => {
      return await axiosInstance.delete("/auth/logout", {
        withCredentials: true,
      });
    },
    onSuccess: () => {
      setUser(null);
      toast.success("Successfully logged out");
      navigate("/");
    },
  });
}
