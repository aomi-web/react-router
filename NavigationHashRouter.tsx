import React, { useEffect } from 'react';
import { HashRouter, HashRouterProps as NativeHashRouterProps, useNavigate } from 'react-router-dom';
import { navigationServices } from './Navigation';


const NavigationWrapper = React.memo(() => {
  const navigate = useNavigate();
  useEffect(() => {
    navigationServices.setNavigate(navigate);
  });
  return undefined;
});

export const NavigationHashRouter: React.FC<NativeHashRouterProps> = React.memo(({ children, ...props }) => {
  return (
    <HashRouter {...props} >
      <NavigationWrapper/>
      {children}
    </HashRouter>
  );
});
