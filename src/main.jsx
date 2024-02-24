import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignIn from './assets/components/auth/SignIn';
import SignUp from './assets/components/auth/SignUp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
     <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes> 
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);