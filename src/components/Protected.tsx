import { useContext, ReactNode } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Protected = ({ children }: { children: ReactNode }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/account" replace />;
  } else {
    return children;
  }
};
export default Protected;
