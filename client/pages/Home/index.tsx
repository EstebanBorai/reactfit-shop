import Banner from 'components/Banner';
import Footer from 'components/Footer';
import Showcase from 'containers/Showcase';
import * as React from 'react';
import './home.scss';

const Home  = () => (
  <main className="main-layout">
    <Banner />
    <Showcase />
    <Footer />
  </main>
);

export default Home;
