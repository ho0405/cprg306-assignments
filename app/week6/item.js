// item.js
import React from 'react';

const Item = ({ name, quantity, category }) => (
  <li className="item">
      <span>{name}</span>
      <span>{quantity}</span>
      <span>{category}</span>
  </li>
);

export default Item;
