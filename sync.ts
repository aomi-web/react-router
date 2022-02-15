import { navigationServices } from './Navigation';
import { History } from 'history';
import { observe } from 'mobx';

export function syncHistory(history: History) {
  // init
  navigationServices.history = history;

  history.listen(({ location, action }) => {
    navigationServices.setLocation(location);
  });
  navigationServices.setLocation(history.location);

  // history.subscribe = (listener) => {
  //   const onStoreChange = () => {
  //     const rawLocation = { ...navigationServices.location };
  //     listener(rawLocation, history.action);
  //   };
  //
  //   // Listen for changes to location state in store
  //   const unsubscribeFromStore = observe(navigationServices, 'location', onStoreChange);
  //
  //   listener(navigationServices.location, history.action);
  //
  //   return unsubscribeFromStore;
  // };

  return history;
}
