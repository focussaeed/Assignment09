import React from "react";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Home } from "../Pages/Home"
import {Signin} from "../Pages/Signin"
import { Layout_Component } from "../Components/Layout_Component";
import { Signup_Component } from "../Pages/Signup_Component";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout_Component / >}>
      <Route path="" element={<Home />} />
      <Route path="Signin" element={<Signin />} />
      <Route path="Signup_Component" element={<Signup_Component />} />
    </Route>
  )
);

export const Router_App = () => {
  return <RouterProvider router={router} />;
};
