import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, children }) => (
  !isLoggedIn ? <Navigate to="/sign-in" replace /> : children
);

export default ProtectedRoute;
