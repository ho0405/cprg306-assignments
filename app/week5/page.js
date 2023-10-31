import ItemList from './item-list';
import Link from 'next/link';


export default function Week5page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <ItemList />
      <Link href="/" legacyBehavior>
    <a className="home-link">Go to home</a>
</Link>

    </main>
  );
}


