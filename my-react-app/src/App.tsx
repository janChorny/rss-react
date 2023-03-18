import React, { Component } from 'react';
import { ProductsPage } from './pages/ProductsPage';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </>
    );
  }
}
