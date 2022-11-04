import React from 'react';
import { mathCol, mathRow } from '../untils/scripts';

const ListActiveSquares = ({ listField, stateMode }) => {
  const arrayActiveSquere = listField.map(
    (item, index) =>
      item && (
        <li className="listItems__item" key={index}>
          row {mathRow(index, stateMode)} col {mathCol(index, stateMode)}
        </li>
      ),
  );

  return (
    <div className="activeSquares">
      <p className="title">Hover squares</p>
      <ul className="listItems">{arrayActiveSquere}</ul>
    </div>
  );
};

export default ListActiveSquares;
