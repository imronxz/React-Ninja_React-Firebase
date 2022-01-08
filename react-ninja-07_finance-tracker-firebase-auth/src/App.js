// npm
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Costum Hooks
import { useAuthContext } from './hooks/useAuthContext';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ThemeSelector from './components/ThemeSelector';

export default function App() {
  const { authIsReady, user, mode } = useAuthContext();

  return (
    <div className={`App ${mode}`}>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <ThemeSelector />
          <Switch>
            <Route exact path="/">
              {!user && <Redirect to="/login" />}
              {user && <Home />}
            </Route>
            <Route path="/login">
              {user && <Redirect to="/" />}
              {!user && <Login />}
            </Route>
            <Route path="/signup">
              {user && <Redirect to="/" />}
              {!user && <Signup />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}
