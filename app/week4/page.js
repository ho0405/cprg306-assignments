import NewItem from './new-item';
import Link from 'next/link';


function Week4Page() {
  return (
    <div className="week4">
      <NewItem />
      <Link href="/" legacyBehavior>
    <a className="home-link">Go to home</a>
</Link>

    </div>
    
  );
}

export default Week4Page;
