/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    // if user is logged in then only allow to see children 
    if(user){
        return children;
    }
    // else navigate to login page 
    return <Navigate state={location?.pathname} to='/login' replace></Navigate>
};

// Adding proptypes 
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}
export default PrivateRoute;