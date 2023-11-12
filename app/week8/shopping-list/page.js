'use client';

import { useState, useEffect } from 'react';
import { useUserAuth } from '../_utils/auth-context';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ShoppingListPage() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');
  const { user } = useUserAuth();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true once the component mounts
    setIsClient(true);
  }, []);

  useEffect(() => {
    // This useEffect will run only on the client side and only after the component has mounted
    if (isClient && !user) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router = useRouter();
      router.replace('/week8'); // Adjust this path to your landing page
    }
  }, [user, isClient]);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [
      ...prevItems,
      { ...newItem, id: prevItems.length + 1 },
    ]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName
      .split(',')[0]
      .trim()
      .replace(
        /[\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�]/g,
        ''
      );
    setSelectedItemName(cleanedItemName);
  };

  if (user) {
    return (
      <main>
        <h1>Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />{' '}
        {/* Pass handleItemSelect to ItemList */}
        <MealIdeas ingredient={selectedItemName} />{' '}
        {/* Use the MealIdeas component with the selected item name */}
        <Link href="/" legacyBehavior>
          <a className="home-link">Go to Home</a>
        </Link>
      </main>
    );
  } else {
    return null;
  }
}
