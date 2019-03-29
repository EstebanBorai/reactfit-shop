import * as React from 'react';
import './main.scss';
import Filters from 'components/Filters';
import Showcase from 'components/Showcase';

const Main = () => {
  return (
    <main className="app-main">
      <div className="container">
        <Filters />
        <Showcase />
      </div>
    </main>
  )
};

export default Main;
