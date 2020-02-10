import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import './index.css';
// import App from './App';
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Menu from './components/Menu';
import Main from './components/Main';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Favicon from 'react-favicon';
import * as serviceWorker from './serviceWorker';

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

ReactDOM.render(
  <div>
    <Favicon url='https://minio.russelljones.ca/portfolio/drupal/undraw_about_me_wa29.svg' />
  </div>,
  document.getElementById('fav')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
