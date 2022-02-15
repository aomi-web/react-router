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
  push(location) {
    this.history.push(location);
  }

  @action
  replace(location) {
    this.history.replace(location);
  }

  @action
  go(n) {
    this.history.go(n);
  }

  /**
   * @deprecated 请使用 back
   */
  @action
  goBack() {
    console.warn(`[deprecated] 请使用back方法`);
    this.back();
  }

  @action
  back() {
    this.history.back();
  }

  @action
  goForward() {
    console.warn(`[deprecated] 请使用forward方法`);
    this.forward();
  }

  @action
  forward() {
    this.history.forward();
  }

}

export const navigationServices = new Navigation();

