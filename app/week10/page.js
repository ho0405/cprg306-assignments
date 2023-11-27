'use client';
import { useState, useEffect } from 'react';
import { useUserAuth } from './_utils/auth-context'; // Adjust the path as needed
import Link from 'next/link';

function Week8Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error('Error during GitHub sign-in:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error('Error during sign-out:', error);
    }
  };

  return (
    <div>
      {isClient && (
        <>
          {user ? (
            <>
              <p>
                Welcome, {user.displayName} ({user.email})
              </p>
              <button onClick={handleSignOut}>Sign Out</button>
              {/* Updated Link usage according to the latest Next.js practices */}
              <Link href="/week8/shopping-list">Go to Shopping List</Link>
            </>
          ) : (
            <button onClick={handleSignIn}>Sign In with GitHub</button>
          )}
        </>
      )}
    </div>
  );
}

export default Week8Page;
