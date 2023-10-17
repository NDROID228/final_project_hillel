import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
    if (!localStorage.getItem('user_token')) {
        return <Navigate to='/login' replace />
    }
    
    return <Outlet />
}

export default PrivateRoute;