import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';


import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => {
  return (
    <div>
      <header>
        <Link to="/" className="header-link">
          <h1><i class='fas fa-basketball-ball' ></i></h1>
        </Link>
      </header>
        <Switch>
          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
          <AuthRoute exact path="/" component={GreetingContainer} />
        </Switch>

    </div>
  );
};

export default App;