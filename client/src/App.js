import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Navbar from './shared/components/Navigation/NavBar';

import Offers from './offres/pages/Offers.jsx';
import OfferDetails from './offres/pages/OfferDetails.jsx';


import Hello from './testALA/helo';
 import Admin from './admin/admin/pages/Home';
// import Admin from './admin/admin/pages/User/Homev2';
import Adminadd from './admin/admin/pages/Adduser';
import EditUser from './admin/admin/pages/User/EditUser';
import User from './admin/admin/pages/User';
import ListeOffres from './admin/admin/pages/listesOffres';
 
 
import AuthPage from '../src/dhiaauth/signup/authpage';

import SigninPage from './dhiaauth/signin/signinpage';
import DetailsUS from './admin/admin/pages/Details';
import DetailOffreREc from './admin/admin/pages/RecOffreDetails'
import CV from './admin/admin/pages/CV/CV'
import CVList from './admin/admin/pages/CV/listeCV'
function App() {
  return (



     <Router>
       <Navbar />
      <Routes>
        {/* <Route path="/" element={<Hello />} /> */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminadd" element={<Adminadd />} />
        <Route path="/users/edit/:id" element={<DetailsUS />} />
        {/* <Route path="/users/edit/:id" element={<EditUser/>} /> */}
        <Route exact path="/users/:id" component={User} />
        <Route path="/ListeOffres" element={<ListeOffres />} />
        <Route path="/ListeOffresREC" element={<DetailOffreREc />} />
        <Route path="/CV" element={<CV />} />
        <Route path="/CVList" element={<CVList />} />
      


        <Route path="/offers" element={<Offers items={offers} />} />
        <Route path="/offers/:offerId" element={<OfferDetails />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/auth" element={<AuthPage />} />
        
      </Routes>
    </Router> 
    
    
    
  );
}
const offers = [
  {
    id: 'off1',
    title: 'Dev JAVA',
    image:
      'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
    description: 'This offers seems to be good for youThis offers seems t offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for you',

  },
  {
    id: 'off2',
    title: 'Dev Mobile Flutter',
    image:
      'https://sannacode.com/storage/app/uploads/public/5ee/897/555/5ee8975550eff237186992.png',
    description: 'This offers seems to be good for you',

  },
  {
    id: 'off3',
    title: 'Dev JAVA',
    image:
      'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
    description: 'This offers seems to be good for youThis offers seems to be  good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for you',

  }
  , {
    id: 'off4',
    title: 'Dev JAVA',
    image:
      'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
    description: 'This offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers ',

  }
  , {
    id: 'off5',
    title: 'Dev JAVA',
    image:
      'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
    description: 'This offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be  ',

  }, {
    id: 'off6',
    title: 'Dev Python',
    image:
      'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
    description: 'This offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be  ',

  },
];

export default App;
