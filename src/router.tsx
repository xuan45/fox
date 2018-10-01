import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import dynamic from './utils/dynamic';

const paths = [
  '/Input',
  '/Button',
  '/Ripple',
  '/KeyBoard',
  '/ActionSheet',
  '/Drawer',
  '/Mask',
  '/CheckBox',
  '/Icon',
  '/Spin',
];

const Nav = () => {
  return (
    <div>
      {paths.map(path => {
        return (
          <div key={path}>
            <Link to={path}>{path}</Link>
          </div>
        );
      })}
    </div>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Nav} />
        {paths.map(path => {
          return <Route key={path} exact path={path} component={dynamic(() => import(`./component${path}/demo`))} />;
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
