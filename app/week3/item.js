
export default function Item({ name, quantity, category }) {
  return (
    <div className="border border-sky-blue-500 rounded-lg p-4 m-4" >
      <h3 className = "text-2xl font-bold">{name}</h3>
      <p>Buy{quantity} in {category}</p>
      </div>
    
   
  );
};