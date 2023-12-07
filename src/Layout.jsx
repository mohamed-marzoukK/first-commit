// Layout.js
import React from 'react';
import Header from './componnets/Header';
import Footer from './componnets/Footer';


const Layout = ({ children }) => {
  return (
    <>
    
      <Header/>
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
