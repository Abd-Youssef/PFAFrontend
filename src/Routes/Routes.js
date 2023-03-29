import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Route,
  Routes as ComponentRoutes,
} from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Password from "../Pages/Password/Password";
import  SignIn  from "../Pages/SignIn/SignIn";
import  SignUp  from "../Pages/SignUp/SignUp";
import PrivateRoute from "./Privateroute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
function Routes(props) {
  const [token, setToken] = useState(null);
  const auth = useSelector((state) => state.auth);
  console.log("auth :", auth);
  return (
    <BrowserRouter>
      <ComponentRoutes>
        <Route path="/" element={<PublicRoute component={<SignIn />} />} />
        <Route
          path="/signup"
          element={<PublicRoute component={<SignUp />} />}
        />
        <Route
          path="/signin"
          element={<PublicRoute component={<SignIn />} />}
        />
        <Route
          path="/password"
          element={<PublicRoute component={<Password />} />}
        />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={<Dashboard token={token} />} />}
        />
      </ComponentRoutes>
    </BrowserRouter>
  );
}
export { Routes };
