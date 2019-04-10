import Filters from 'components/Filters';
import Showcase from 'containers/Showcase';
import * as React from 'react';
import './main.scss';

const Main = () => (
  <div className="main-layout">
    <main className="app-main">
      <div className="container">
        <Filters />
        <Showcase />
      </div>
    </main>
  </div>
);

export default Main;
