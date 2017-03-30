import React from 'react';

export default function lovesView ({ handleClick, loves }) {
  return (
    <div>
      <h3>Loves: {loves}</h3>
      <button className="btn btn-danger" onClick={handleClick}>Love</button>
    </div>
  );
}
