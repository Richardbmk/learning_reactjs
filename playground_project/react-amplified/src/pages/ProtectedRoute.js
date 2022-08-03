import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    setUser(user);
  }

  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};

export default withAuthenticator(ProtectedRoute);
