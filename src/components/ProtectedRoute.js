import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({  children }) => {
    const {user} = useContext(UserContext);
    if (!user.isAdmin) {
      return <Navigate to="/" replace />;
    }
  
    return children;
  };

  export default ProtectedRoute;