import { Navigate } from "react-router-dom";

function SecureRoute({ children }) {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default SecureRoute;