import Link from 'next/link';
import ItemList from './item-list';

export function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold">Shopping List</h1>
      <ItemList />
      <Link href="/">Go to home</Link>
    </main>
  );
}

export default Page;
