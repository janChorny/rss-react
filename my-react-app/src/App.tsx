import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main/MainPage';
import { AboutPage } from './pages/about/AboutPage';
import { NotFoundPage } from './pages/notfound/NotFoundPage';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { GeneralState } from 'models/models';
import { FormsPage } from './pages/forms/FormsPage';

export class App extends Component<Record<string, never>, GeneralState> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      pageTitle: '',
    };
  }

  setPageTitle = (pageTitle: string) => {
    this.setState({ pageTitle });
  };

  render() {
    return (
      <>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<MainPage setTitle={this.setPageTitle} />} />
            <Route path="/about" element={<AboutPage setTitle={this.setPageTitle} />} />
            <Route path="/forms" element={<FormsPage setTitle={this.setPageTitle} />} />
            <Route path="*" element={<NotFoundPage setTitle={this.setPageTitle} />} />
          </Routes>
        </main>
        <Footer />
      </>
    );
  }
}
