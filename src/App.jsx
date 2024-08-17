
import {
  BrowserRouter as Router,
  Routes, Route,
  Link
} from 'react-router-dom';
import './App.css';
import HomePage from './Home';
import AboutPage from './About';

import ReactGa from 'react-ga4';
import Blog from './Blog';


const TRACKING_ID = "G-NRJ237RM12"
ReactGa.initialize(TRACKING_ID)

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
                      <li>
                          <Link to="/blog">
                              Blog
                          </Link>
                      </li>
                  </ul>
              </nav>

              <Routes>
                  <Route path="/"
                      element={<HomePage />} />
                  <Route path="/about"
                      element={<AboutPage />} />
                  <Route path="/blog"
                      element={<Blog />} />
              </Routes>
          </div>
      </Router>
  );
};



export default App;
