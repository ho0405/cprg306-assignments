import React from 'react';
import { useUserAuth } from './_utils/auth-context';

function AuthenticationComponent() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    await gitHubSignIn();
    // Additional logic after signing in (if necessary)
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
    // Additional logic after signing out (if necessary)
  };

  return (
    <div>
      {user ? (
        <p>
          Welcome, {user.displayName} ({user.email})
          <button onClick={handleSignOut}>Sign Out</button>
        </p>
      ) : (
        <button onClick={handleSignIn}>Sign In with GitHub</button>
      )}
    </div>
  );
}

export default AuthenticationComponent;
