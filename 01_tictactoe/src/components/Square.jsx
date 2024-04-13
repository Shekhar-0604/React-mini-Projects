import React from 'react';
import '../styles/root.scss';

function Square({ value, onClick }) {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick => {
        console.log(value);
      }}
    >
      {value}
    </button>
  );
}

export default Square;
