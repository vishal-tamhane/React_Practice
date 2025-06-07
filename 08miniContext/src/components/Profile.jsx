import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <>
          <p>Username: {user.username}</p>
          <p>Password: {user.password}</p>
        </>
      ) : (
        <p>No user logged in.</p>
      )}
    </div>
  );
}

export default Profile;
