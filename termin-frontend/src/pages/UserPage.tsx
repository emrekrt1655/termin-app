import React from 'react';
import UserProfile from '../components/profile/UserProfile';

const UserPage: React.FC = () => {
  console.log('hello')
  return (
    <div>
      <h1>User Page</h1>
      <UserProfile />
    </div>
  );
};

export default UserPage;