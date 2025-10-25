import APIClient from "@/service/api-client";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

interface LoginRequest {
  email: string;
  password: string;
}

export function useLogin() {
  const loginClient = new APIClient("/auth/login");
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (request: LoginRequest) => {
      return await loginClient.post(request, {
        headers: { "Content-Type": "application/json" },
      });
    },
    onSuccess: () => {
      navigate("/dashboard");
    },
  });
}
