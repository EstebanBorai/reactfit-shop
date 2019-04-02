import * as React from 'react';
import './filters.scss';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare as faSquareEmpty } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IFilter {
  filter: string;
  isSelected: boolean;
}

const Filter = (props: IFilter) => (
  <li className="filter">
    <FontAwesomeIcon icon={props.isSelected ? faSquare : faSquareEmpty} />
    <span>{props.filter}</span>
  </li>
);

export default Filter;
