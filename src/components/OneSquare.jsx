import React from 'react';

const OneSquare = ({ state, onHover }) => {
  const className = state ? 'oneSquare oneSquare--blue' : 'oneSquare oneSquare--white';
  return <li onMouseEnter={onHover} className={className}></li>;
};

export default OneSquare;
