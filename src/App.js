import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css'
import Login from './components/Login/Login.jsx'
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { Blog, Features, Footer, Possibility, WhatGPT3 } from './containers';
import { Article, Navbar } from './components';
const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path='/Login' element={ <Login />} />
        <Route path='/WhatGPT3' element={ 
         <>
         <Navbar />
        <WhatGPT3 />
        <Footer />
          </>
        } />
        <Route path='/Features' element={ 
            <>
        <Navbar />
        <Features />
        <Footer />
        </>
        } />
        <Route path='/Possibility' element={
           <>
          <Navbar />
          <Possibility />
          <Footer />
          </>
    } />
        <Route path='/Blog' element={ 
            <>
            <Navbar />
            <Blog />
            <Footer />
            </>
        } />

      </Routes>
    </BrowserRouter>
    </Provider>
  );
};

export default App;