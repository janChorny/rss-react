import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main/MainPage';
import { AboutPage } from './pages/about/AboutPage';
import { NotFoundPage } from './pages/notfound/NotFoundPage';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </>
    );
  }
}
