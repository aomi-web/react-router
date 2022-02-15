import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * 传递 location navigate 属性给子组件
 * @param Child
 */
export function withRouter(Child: any): any {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    return <Child {...props} navigate={navigate} location={location}/>;
  };
}
