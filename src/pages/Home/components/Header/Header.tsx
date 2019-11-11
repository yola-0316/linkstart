import './Header.scss';
import React, { useState } from 'react';

export default function Header() {
  const [brand] = useState('Linkstart');

  return (
    <div className="header">
      <h1>{brand}</h1>
      <hr />
    </div>
  );
}
