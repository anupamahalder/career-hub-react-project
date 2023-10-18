/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    // if user is logged in then only allow to see children 
    if(user){
        children
    }
    // else navigate to login page 
    return <Navigate to='/login'></Navigate>
};

// Adding proptypes 
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}
export default PrivateRoute;