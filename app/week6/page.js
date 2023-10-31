"use client";

import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json'; 
import Link from 'next/link';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = newItem => {
    setItems(prevItems => [...prevItems, { ...newItem, id: prevItems.length + 1 }]);
  };

  return (
    <main>
      <h1>Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
      <Link href="/" legacyBehavior>
        <a className="home-link">Go to home</a>
      </Link>
    </main>
  );
}
