import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignIn from './assets/components/auth/SignIn';
import SignUp from './assets/components/auth/SignUp';
import Dashboard from './assets/components/pages/Dashboard';
import Reset from './assets/components/pages/resetPassword/Reset';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
     <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resetpassword" element={<Reset />} />
      </Routes> 
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);