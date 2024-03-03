import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    else if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace='true'></Navigate>
};

export default PrivateRoute;