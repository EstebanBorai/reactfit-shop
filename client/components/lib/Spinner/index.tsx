import * as React from 'react';
import reactLogo from '../../../assets/react_logo.png';
import './spinner.scss';

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
