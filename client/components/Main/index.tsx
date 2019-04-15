import Banner from 'components/Banner';
import Showcase from 'containers/Showcase';
import * as React from 'react';
import './main.scss';

const Main = () => (
  <div className="main-layout">
    <Banner />
    <main className="app-main">
      <div className="container">
        <Showcase />
      </div>
    </main>
  </div>
);

export default Main;
