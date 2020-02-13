import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as Sentry from '@sentry/browser';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
// import App from './App';
import 'jquery'
import './scss/App.scss';
import Home from './pages/Home';
import Menu from './components/Menu';
import Main from './components/Main';
import Contact from './components/Contact';
import Footer from './components/Footer';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';

Sentry.init({ dsn: 'https://bf4a6ec181514906aa622b40b170759c@sentry.io/2476789' });

LogRocket.init('herbig-haro/portfolio');
setupLogRocketReact(LogRocket);
LogRocket.getSessionURL(sessionURL => {
  Sentry.configureScope(scope => {
    scope.setExtra('sessionURL', sessionURL);
  });
});

WebFont.load({
  google: {
    families: ['Raleway', 'Roboto', 'sans-serif'],
  },
});

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={Menu} />
      </Switch>
      <div className='container'>
        <Main />
      </div>
      <Switch>
        <Route exact path='/' />
        <Route component={Contact} />
      </Switch>
      <Switch>
        <Route exact path='/' />
        <Route component={Footer} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
