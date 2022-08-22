import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AboutMe } from './layouts/aboutMe/AboutMe';
import { Footer } from './layouts/footer/Footer';
import { Proyects } from './layouts/myproyects/Proyects';
import { NavBar } from './layouts/navbar/NavBar';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <AboutMe/>
    <Proyects/>
    <Footer/>
  </React.StrictMode>
);

