import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar_Component } from "./Navbar_Component";
import { Footer_Component } from "./Footer_Component";


export const Layout_Component = ({ children }) => {
  return (
    <div>
      <Navbar_Component />


      {/* {children} */}

      <Outlet />

    <footer> <Footer_Component /> </footer>
    </div>
  );
};
