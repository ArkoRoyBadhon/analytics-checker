// App.js

import {
  BrowserRouter as Router,
  Routes, Route,
  Link
} from 'react-router-dom';
import './App.css';
import HomePage from './Home';
import AboutPage from './About';

const App = () => {
  return (
      <Router>
          <div className="container">
              <nav>
                  <ul>
                      <li>
                          <Link to="/">
                              Home
                          </Link>
                      </li>
                      <li>
                          <Link to="/about">
                              About
                          </Link>
                      </li>
                  </ul>
              </nav>

              <Routes>
                  <Route path="/"
                      element={<HomePage />} />
                  <Route path="/about"
                      element={<AboutPage />} />
              </Routes>
          </div>
      </Router>
  );
};



export default App;
