import React from 'react';
import { observer } from 'mobx-react';
import { createHashHistory } from 'history';
import { HashRouterProps as NativeHashRouterProps, Router } from 'react-router-dom';
import { syncHistory } from './sync';
import { navigationServices } from './Navigation';

export interface HashRouterProps extends Omit<NativeHashRouterProps, 'window'> {
}

const history = syncHistory(createHashHistory());

export const MobxHashRouter: React.FC<HashRouterProps> = React.memo(observer(props => {
  const { location, action } = navigationServices;
  return <Router {...props} location={location} navigationType={action} navigator={history}/>;
}));
