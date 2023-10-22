import Link from 'next/link';
import StudentInfo from '../StudentInfo';

const Week2Page = () => {
  return (
    <div>
      <h1>My Shopping List</h1>
      <StudentInfo />
      <Link href="/" legacyBehavior>
    <a className="home-link">Go to home</a>
</Link>

    </div>

  );
};

export default Week2Page;
