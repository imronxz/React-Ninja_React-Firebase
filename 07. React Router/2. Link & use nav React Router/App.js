import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import { Fragment } from 'react';

function App() {
  return (
    <div className="App">
      <Fragment>
        <BrowserRouter>
          <nav>
            <h1>My Articles</h1>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
