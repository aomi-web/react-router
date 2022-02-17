import { NavigateFunction, NavigateOptions } from 'react-router-dom';
import { To } from 'history';

/**
 * 导航服务
 */
export class Navigation {

  nf: NavigateFunction;

  navigate(to: To, options?: NavigateOptions) {
    this.nf?.(to, options);
  }

  push(to: To, options?: NavigateOptions) {
    this.navigate(to, options);
  }

  replace(to: To, options?: NavigateOptions) {
    this.navigate(to, {
      ...options,
      replace: true
    });
  }

  go(n) {
    this.nf?.(n);
  }

  back() {
    this.nf?.(-1);
  }

  setNavigate(navigate: NavigateFunction) {
    this.nf = navigate;
  }
}

export const navigationServices = new Navigation();

