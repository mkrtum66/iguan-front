import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './styles/global';

import { Redirect, Route, useLocation } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import Navbar from './components/organisms/navbar';
import HomePage from './pages/homePage';
import ProcessPage from './pages/processPage';
import Footer from './components/organisms/footer';
import ProductsPage from './pages/productsPage/productsPage';
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';
import CareerPage from './pages/careerPage';
import ServicePage from './pages/servicesPage';
import CurrentJobPage from './pages/currentJobPage';
import SendCvPage from './pages/sendCvPage';
import ErrorPage from './pages/errorPage';

const App = () => {
  const location = useLocation();
  return (
    <div className="app">
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path={'/'} exact component={HomePage} />
        <Route path={'/services'} component={ServicePage} />
        <Route path={'/process'} component={ProcessPage} />
        <Route path={'/products'} component={ProductsPage} />
        <Route path={'/aboutUs'} component={AboutPage} />
        <Route path={'/career'} exact component={CareerPage} />
        <Route path={'/currentJob/:id'} exact component={CurrentJobPage} />
        <Route path={'/sendCv/:id'} exact component={SendCvPage} />
        <Route path={'/contactUs'} component={ContactPage} />
        <Route path={'/pageNotFound'} component={ErrorPage} />
        <Route path={'*'}>
          <Redirect to={'/pageNotFound'} />
        </Route>
      </Switch>
      {location.pathname !== '/services' ? <Footer /> : ''}
    </div>
  );
};

export default App;
