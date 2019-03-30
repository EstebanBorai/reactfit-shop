import * as React from 'react';
import './main.scss';
import Filters from 'components/Filters';
import Showcase from 'components/Showcase';
import Footer from 'components/Footer';

const Main = () => {
  return (
    <div className="main-layout">
      <main className="app-main">
        <div className="container">
          <Filters />
          <Showcase />
        </div>
      </main>
      <Footer />
    </div>
  )
};

export default Main;
