import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Spinner } from "./ui/spinner";
import { useAuth } from "@/context/auth-context";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isAuthenticated, isLoadingUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoadingUser && !isAuthenticated) {
      navigate("/login");
    }
  }, [isLoadingUser, isAuthenticated, navigate]);

  if (isLoadingUser) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  return user ? <>{children}</> : null;
}
