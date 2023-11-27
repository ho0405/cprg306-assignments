import React from 'react';

// Accept onSelect as a prop
const Item = ({ name, quantity, category, onSelect }) => (
  <li className="item" onClick={() => onSelect(name)}>
    <span>{name}</span>
    <span>{quantity}</span>
    <span>{category}</span>
  </li>
);

export default Item;
