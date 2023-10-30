import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext";


const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default ProtectedRoute;