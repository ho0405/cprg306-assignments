'use client';

import { useState, useEffect } from 'react';
import { getItems, addItem } from '../_services/shopping-list-service';

function ShoppingList({ user }) {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  // Function to load items from Firestore
  async function loadItems() {
    try {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    } catch (error) {
      console.error("Error loading items: ", error);
    }
  }

  // useEffect to call loadItems on component mount
  useEffect(() => {
    loadItems();
  }, [user.uid]);

  // Function to handle adding a new item
  async function handleAddItem() {
    try {
      const item = { name: newItem }; // Assuming each item has at least a name
      const newItemId = await addItem(user.uid, item);
      setItems([...items, { ...item, id: newItemId }]);
      setNewItem(''); // Reset the input field
    } catch (error) {
      console.error("Error adding item: ", error);
    }
  }

  // Render the shopping list and input for new items
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

export default ShoppingList;