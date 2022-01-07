// npm
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Costum Hooks
import { useAuthContext } from './hooks/useAuthContext';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

export default function App() {
  const { authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}
