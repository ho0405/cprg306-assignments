"use client";

import { useState } from 'react';
function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');
  const [eventCreated, setEventCreated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddItem({ name, quantity, category });
    setName('');
    setQuantity(1);
    setCategory('produce');
    setEventCreated(true);

    
    setTimeout(() => {
      setEventCreated(false);
    }, 3000);
  };

  return (
    <main>
      <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">
        {eventCreated && (
          <div className="absolute top-0 mt-8 text-2xl text-yellow-400">
            Item Created
          </div>
        )}
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl text-gray-800 font-bold mb-8">
            Create New Item
          </h1>
          <form onSubmit={handleSubmit} className="block mb-4">
          <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"  
      />
      <input 
        type="number"
        min="1"
        max="99"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        required
        className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white" 
      />
      <select 
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white" 
      >
        
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="meat">Meat</option>
        <option value="frozen foods">Frozen Foods</option>
        <option value="canned goods">Canned Goods</option>
        <option value="bakery">Bakery</option>
        <option value="dry goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
        
      </select>
            <button type="submit" className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white">Add Item</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default NewItem;
