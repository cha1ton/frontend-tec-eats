import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Restaurants from './components/Restaurants';
import RestaurantMenu from './components/RestaurantMenu'; 
import Layout from './components/Layout';
import UserProfile from './components/UserProfile'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurant/:id" element={<RestaurantMenu />} />
          <Route path="/datos-usuario" element={<UserProfile />} /> {/* Nueva ruta */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
