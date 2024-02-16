import React from 'react';
import Navigation from '../navigation/Navigation';
// import Outlet
import {Outlet} from "react-router-dom";

const Root = () => {
  return (
      <>
        <Navigation/>
        <Outlet />
      </>
  );
};

export default Root;