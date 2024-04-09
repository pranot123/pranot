import { FC } from 'react';
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface PublicRouteProps{
    children: React.ReactElement;
}
const PublicRoute: FC <PublicRouteProps>= ({children}) => {
 const {user} = useAuth();
    

    if(user){
        return<Navigate to='/' replace={true}/>
    }
    return children;
    
};
export default PublicRoute;