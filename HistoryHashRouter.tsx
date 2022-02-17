import React from 'react';
import { HashRouterProps as NativeHashRouterProps, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createHashHistory } from 'history';
import { navigationServices } from './Navigation';


const history = createHashHistory();
navigationServices.history = history;

export const HistoryHashRouter: React.FC<NativeHashRouterProps> = React.memo(({ children, ...props }) => {
  return (
    <HistoryRouter {...props} history={history} >
      {children}
    </HistoryRouter>
  );
});
