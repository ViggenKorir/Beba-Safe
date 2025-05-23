import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

const SignInRedirect = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (!isSignedIn) {
      navigate('/sign-in');
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p>Redirecting to sign in page...</p>
    </div>
  );
};

export default SignInRedirect;

