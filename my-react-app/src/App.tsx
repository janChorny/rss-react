import './App.css';
import React from 'react';
import { ProductsPage } from './pages/ProductsPage';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { Navigation } from './components/Navigation';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
