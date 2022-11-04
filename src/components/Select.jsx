import React from 'react';

const Select = ({ list, onSelect, state, placeholder = null }) => {
  const onChange = (e) => {
    onSelect(Number(e.target.value));
  };

  return (
    <select onChange={onChange} value={state} placeholder="Pick mode" className="select">
      {!!placeholder && (
        <option disabled={true} value="0">
          {placeholder}
        </option>
      )}
      {list.map((item) => (
        <option key={item.field} value={item.field}>
          {item.name} mode
        </option>
      ))}
    </select>
  );
};

export default Select;
