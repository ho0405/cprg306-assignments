import Link from 'next/link';

export default function Home() {
  const week = [2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13];
  const doneUpTo = 7;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
        <h1 className="text-4xl font-bold mb-5">
          Web Development 2 Assignments
        </h1>
        <div className="text-lg">
          <ul>
            {week.map((week) =>
              week <= doneUpTo ? (
                <li key={week} className="hover:text-green-400 hover:underline">
                  <Link href={`/week${week}`}>Week {week} Assignment </Link>
                </li>
              ) : (
                <li key={week}>🚧 Week {week} not done yet</li>
              )
            )}
          </ul>
        </div>
      </div>
    </main>
  );
}
