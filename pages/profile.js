import React from 'react';
import Image from 'next/image';
import { useAuth } from '../utils/context/authContext';

export default function UserProfile() {
  const { user } = useAuth();

  return (
    <div>
      <Image src={user.photoURL} alt="userURL" width="100px" height="100px" />
      <h1>Name: {user.displayName}</h1>
      <h2>Email: {user.email}</h2>
      <h3>Last Login: {user.metadata.lastSignInTime}</h3>
    </div>
  );
}
