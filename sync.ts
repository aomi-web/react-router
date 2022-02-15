import { navigationServices } from './Navigation';
import { History } from 'history';

export function syncHistory(history: History) {
  // init
  navigationServices.history = history;

  history.listen((update) => {
    navigationServices.setState(update);
  });

  navigationServices.setState({
    action: history.action,
    location: history.location
  });

  return history;
}
