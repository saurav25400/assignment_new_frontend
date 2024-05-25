import React from 'react'
import { Navigate } from 'react-router-dom'
export const ProtectedRoute = ({userData,children}) => {
    if(userData){
    return (
        <>
        {children}
        </>
    )
    }
    else{
  return (<Navigate to="/" replace={true} />)

    }
  
}
export default ProtectedRoute;
