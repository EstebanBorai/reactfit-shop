import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import './error.scss';

interface IErrorProps {
  message: string;
}

const Error = (props: IErrorProps) => (
  <div className="error-message">
    <FontAwesomeIcon icon={faExclamationTriangle} />
    <h3>{props.message}</h3>
  </div>
);

Error.defaultProps = {
  message: null
};

export default Error;
