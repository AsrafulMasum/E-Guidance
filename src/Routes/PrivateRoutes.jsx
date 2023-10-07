import PropTypes from "prop-types";
import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Pages/Loading/Loading";


const PrivateRoutes = ({children}) => {

  const {user, loading} = useContext(AuthContext)

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired
}