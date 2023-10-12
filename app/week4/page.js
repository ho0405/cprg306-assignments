import NewItem from './new-item';
import Link from 'next/link';


function Week4Page() {
  return (
    <div className="week4">
      <NewItem />
      <Link href="/">Go to home</Link>
    </div>
    
  );
}

export default Week4Page;
