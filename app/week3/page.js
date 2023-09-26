import ItemList from './item-list';
import Item from './item';

function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold">Shopping List</h1>
      <ItemList />
    </main>
  );
}

export default Page;