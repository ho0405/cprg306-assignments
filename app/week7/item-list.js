'use client';

import { useState } from 'react';
import Item from './item';

function ItemList({ items, onItemSelect }) {
  // Now accepts an onItemSelect prop
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const handleItemClick = (itemName) => {
    if (onItemSelect) {
      onItemSelect(itemName);
    }
  };

  return (
    <div>
      <button
        className={`button ${sortBy === 'name' ? 'active' : ''}`}
        onClick={() => setSortBy('name')}
      >
        Sort by Name
      </button>
      <button
        className={`button ${sortBy === 'category' ? 'active' : ''}`}
        onClick={() => setSortBy('category')}
      >
        Sort by Category
      </button>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => handleItemClick(item.name)} // Pass onSelect prop to Item
          />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
