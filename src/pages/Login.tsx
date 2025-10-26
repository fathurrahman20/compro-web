import { LoginForm } from "@/components/login/LoginForm";
import { useAuth } from "@/context/auth-context";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";

export default function LoginPage() {
  const { isAuthenticated, isLoadingUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoadingUser && isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, isLoadingUser, navigate]);

  return (
    <>
      <ToastContainer />
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
