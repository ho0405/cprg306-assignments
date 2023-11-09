'use client';

import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas'; // Import the MealIdeas component
import itemsData from './items.json';
import Link from 'next/link';

export default function Week7Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(''); // State for the selected item name

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [
      ...prevItems,
      { ...newItem, id: prevItems.length + 1 },
    ]);
  };

  const handleItemSelect = (itemName) => {
    // Clean up the item name, if necessary, before setting it
    const cleanedItemName = itemName
      .split(',')[0]
      .trim()
      .replace(
        /[\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�]/g,
        ''
      );
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main>
      <h1>Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} onItemSelect={handleItemSelect} />{' '}
      {/* Pass handleItemSelect to ItemList */}
      <MealIdeas ingredient={selectedItemName} />{' '}
      {/* Use the MealIdeas component with the selected item name */}
      <Link href="/" legacyBehavior>
        <a className="home-link">Go to home</a>
      </Link>
    </main>
  );
}
