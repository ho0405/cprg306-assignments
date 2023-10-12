import Link from 'next/link';
import StudentInfo from './StudentInfo';
import { Week3Page } from './week3/page';
import { Week4Page } from './week4/page';
import Week2Page from './week2/page';

const HomePage = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />




      <div class="flex flex-row gap-4 m-4 w-full">
  <div class="flex-1 bg-blue-100 p-6 rounded-lg">
    <h2 class="mb-4 text-xl font-bold text-gray-900"><button class="bg-blue-500 hover:bg-blue-700 active:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
    <Link href="/week2">Go to Week 2</Link>
</button></h2>
    <p class="text-gray-700">
      This is Week2Page.
    </p>
  </div>
  <div class="flex-1 bg-blue-200 p-6 rounded-lg">
    <h2 class="mb-4 text-xl font-bold text-gray-900"><button class="bg-blue-500 hover:bg-blue-700 active:bg-yellow-700 text-white font-bold py-2 px-4 rounded"><Link href="/week3">Go to Week 3</Link></button></h2>
    <p class="text-gray-700">This is Week3Page.</p>
  </div>
  <div class="flex-1 bg-blue-300 p-6 rounded-lg">
    <h2 class="mb-4 text-xl font-bold text-gray-900"><button class="bg-blue-500 hover:bg-blue-700 active:bg-yellow-700 text-white font-bold py-2 px-4 rounded"><Link href="/week4">Go to Week 4</Link></button></h2>
    <p class="text-gray-700">This is the Week4Page.</p>
  </div>
</div>
    </div>
  );
};


export default HomePage;
