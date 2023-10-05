import Link from 'next/link';
import StudentInfo from './StudentInfo';

const HomePage = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href="/week2">Go to Week 2</Link>
      <br></br>
      <Link href="/week3">Go to Week 3</Link>
      <br></br>
      <Link href="/week4">Go to Week 4</Link>
    </div>
  );
};

export default HomePage;
