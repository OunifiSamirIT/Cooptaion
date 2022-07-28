import React from 'react';
import Navbar from './shared/components/Navigation/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Routes, 
} from 'react-router-dom';
import Offers from './offres/pages/Offers';
import Hello from './testALA/helo';
import Admin from './admin/components/RecPage';
import AccepteProfile from './admin/components/Accepte';
import AuthPage from './authentification/authPage';
function App() {
  return (
    
   <Router>
    <Navbar />
<Routes>
<Route path="/" element={<Hello />} />
<Route path="/admin" element={<Admin />} />
<Route path="/offers" element={<Offers />} />
<Route path="/auth" element={<AuthPage />} />
</Routes>
   </Router>


  // AccepteProfile()
  );
}


export default App;
