import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/home/home';
import Login from './pages/login/login';
import Signup from './pages/signup/Signup';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="signup">
          <Signup />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
