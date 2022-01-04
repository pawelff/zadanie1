import React from 'react';
import { Link } from 'react-router-dom';
import arch from './arch.png';

export default () => {
  return (
    <div>
      <Link to="/">Go back home</Link>
      <br />
      Architektura pochodzi z lab 9 i nie została zmieniona.
      <br />
      <img src={arch} alt="arch" />
    </div>
  );
};
