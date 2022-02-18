import React, { useLayoutEffect, useState } from 'react';
import { HashRouterProps as NativeHashRouterProps, Router } from 'react-router-dom';
import { createHashHistory } from 'history';
import { navigationServices } from './Navigation';


const history = createHashHistory();
navigationServices.history = history;

export const HistoryHashRouter: React.FC<NativeHashRouterProps> = React.memo(({ children, ...props }) => {

  let [state, setState] = useState({
    action: history.action,
    location: history.location
  });
  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router {...props}
            location={state.location}
            navigationType={state.action}
            navigator={history}
    >
      {children}
    </Router>
  );
});
