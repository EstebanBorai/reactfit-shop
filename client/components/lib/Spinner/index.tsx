import * as React from 'react';
import './spinner.scss';
import reactLogo from '../../../assets/react_logo.png';

const Spinner = () => (
  <div className="spinner-container">
    <img
      width="300px"
      height="212px"
      src={reactLogo}
      className="spinner"
    />
  </div>
);

export default Spinner;
