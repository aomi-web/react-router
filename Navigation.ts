import { History } from 'history';

/**
 * 导航服务
 */
export class Navigation {

  history: History;

  push(location, state?: any) {
    this.history.push(location, state);
  }

  replace(location, state?: any) {
    this.history.replace(location, state);
  }

  go(n) {
    this.history.go(n);
  }


  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

}

export const navigationServices = new Navigation();

