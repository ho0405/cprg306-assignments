import Link from 'next/link';
import StudentInfo from '../components/StudentInfo.js';

const HomePage = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href="/week2">Go to Week 2</Link>
    </div>
  );
};

export default HomePage;
