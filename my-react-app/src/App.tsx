import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main/MainPage';
import { AboutPage } from './pages/about/AboutPage';
import { NotFoundPage } from './pages/notfound/NotFoundPage';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { GeneralState } from 'models/models';

export class App extends Component<GeneralState> {
  constructor(props: GeneralState | Readonly<GeneralState>) {
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
            <Route path="*" element={<NotFoundPage setTitle={this.setPageTitle} />} />
          </Routes>
        </main>
        <Footer />
      </>
    );
  }
}
