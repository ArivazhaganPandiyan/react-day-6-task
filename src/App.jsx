import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Carrer from './Carrer';
import AllCourses from './AllCourses';
import FullStack from './FullStack';
import DataScience from './DataScience';
import Cyber from './Cyber';

import './App.css'; // Import the CSS file for styling

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/">All Courses</Link>
            </li>
            <li>
              <Link to="/fullstack">FullStack</Link>
            </li>
            <li>
              <Link to="/datascience">DataScience</Link>
            </li>
            <li>
              <Link to="/cyber">CyberSecurity</Link>
            </li>
            <li>
              <Link to="/carrer">Carrer</Link>
            </li>
          </ul>
        </nav>
        <hr />
 <h1>Welcome To Guvi</h1>
        <Routes>
          <Route path='/' element={<AllCourses />} />
          <Route path='/fullstack' element={<FullStack />} />
          <Route path='/datascience' element={<DataScience />} />
          <Route path="/cyber" element={<Cyber />} />
          <Route path="/carrer" element={<Carrer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
