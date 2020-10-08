import React from 'react';
import Contents from '../Contents/';
import Header from '../Header';
import Footer from '../Footer';

const LandingPage: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Contents />
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
