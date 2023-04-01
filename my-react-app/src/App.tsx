import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main/MainPage';
import { AboutPage } from './pages/about/AboutPage';
import { NotFoundPage } from './pages/notfound/NotFoundPage';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { FormsPage } from './pages/forms/FormsPage';

export function App() {
  const [pageTitle, setPageTitle] = React.useState('');

  const handlePageTitle = React.useCallback((pageTitle: React.SetStateAction<string>) => {
    setPageTitle(pageTitle);
  }, []);

  return (
    <>
      <Header pageTitle={pageTitle} />
      <main className="main">
        <Routes>
          <Route path="/" element={<MainPage setTitle={handlePageTitle} />} />
          <Route path="/about" element={<AboutPage setTitle={handlePageTitle} />} />
          <Route path="/forms" element={<FormsPage setTitle={handlePageTitle} />} />
          <Route path="*" element={<NotFoundPage setTitle={handlePageTitle} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
