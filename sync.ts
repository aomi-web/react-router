import { navigationServices } from './Navigation';
import { History } from 'history';

export function syncHistory(history: History) {
  // init
  navigationServices.history = history;

  history.listen(navigationServices.setState);

  navigationServices.setState({
    action: history.action,
    location: history.location
  });

  return history;
}
