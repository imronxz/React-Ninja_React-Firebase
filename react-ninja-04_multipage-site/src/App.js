import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
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
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
