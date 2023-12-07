import * as React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AjoutArticle from './componnets/AjoutArticle';
import { CartProvider } from 'use-shopping-cart';
import ModifierArticle from './componnets/ModifierArticle';
import Cart from './Client/Cart';
import ListClient from './Client/ListClient';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListArticles from './componnets/ListArticles';
import Layout from './Layout';
import LoginClient from './componnets/LoginClient';
import Signup from './componnets/Signup';
import PdfCart from './componnets/PdfCart';
import  Favorite  from './componnets/Favorite';


function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <ListClient/>
              </Layout>
            }
          />
          <Route
            path="/AjoutArticle"
            element={
              <Layout>
                <AjoutArticle/>
              </Layout>
            }
          />
          <Route
            path="/ModifierArticle/:id"
            element={
              
                <ModifierArticle/>
             
            }
          />
          <Route
            path="/ListClient"
            element={
              <Layout>
                <ListClient/>
              </Layout>
            }
          />
          {/* <Route
            path="/Login"
            element={
              
                <Login/>
              
            }
          /> */}
          <Route path="/loginclient"  element={<LoginClient/>}/>
<Route path="/signup"  element={<Signup/>}/>

<Route path='/pdfCart' element={<PdfCart/>}/>
<Route path='/Favorite' element={<Favorite/>}/>
          <Route
            path="/Cart"
            element={
              <Layout>
                <Cart/>
              </Layout>
            }
          />
             <Route
          path="/ListArticles"
          element={
            <Layout>
              <ListArticles/>
            </Layout>
          }
        /> 
        

        </Routes>
        <ToastContainer/>
      </Router>
    </CartProvider>
  );
}

export default App;
