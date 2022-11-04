import React, { useEffect, useState } from 'react';
import OneSquare from './OneSquare';

const FieldSquare = ({ listField, stateMode, onHoverChange }) => {
  const arraySquare = listField.map((state, index) => {
    return <OneSquare onHover={() => onHoverChange(index)} key={index} state={state} />;
  });

  return (
    <ul className="fieldSquare" style={{ width: `${stateMode * 45 + 2}px` }}>
      {arraySquare}
    </ul>
  );
};

export default FieldSquare;
