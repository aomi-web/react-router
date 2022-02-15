import { action, makeAutoObservable, observable } from 'mobx';
import { History, Location } from 'history';

/**
 * 导航服务
 */
export class Navigation {

  @observable
  location: Location | null = null;

  history: History;

  @observable
  action: string | null = null;

  constructor() {
    makeAutoObservable(this, undefined, {
      autoBind: true
    });
  }

  @action
  setState(state) {
    this.location = state.location;
    this.action = state.action;
  }

  @action
  push(location, state?: any) {
    this.history.push(location, state);
  }

  @action
  replace(location, state?: any) {
    this.history.replace(location, state);
  }

  @action
  go(n) {
    this.history.go(n);
  }


  @action
  back() {
    this.history.back();
  }

  @action
  forward() {
    this.history.forward();
  }

}

export const navigationServices = new Navigation();

