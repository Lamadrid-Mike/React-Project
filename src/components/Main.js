import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Travel from './Travel';
import { Routes, Route, Navigate } from 'react-router-dom';

export function Main() {
  return (
    <div>
        <Header />
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route path="/travel" element={<Travel />} />
            </Routes>
        <Footer />
    </div>
  )
}  

export default Main;